use crate::{
    model::{CrtShEntry, Subdomain}, // CrtShEntry entries is from that site that contains SSL's certificates
    Error,                          // Our error structure
};

use futures::stream;
use futures::StreamExt;

use reqwest::Client; // Like nodeJS Axios :P
use std::{collections::HashSet, time::Duration}; // HashSet is to avoids collisions between the same server checks
use trust_dns_resolver::{
    // The Resolver is responsible for performing recursive queries to lookup domain names.
    config::{ResolverConfig, ResolverOpts},
    name_server::{GenericConnection, GenericConnectionProvider, TokioRuntime},
    AsyncResolver,
};
/* Creates our type for this implementation */
type DnsResolver = AsyncResolver<GenericConnection, GenericConnectionProvider<TokioRuntime>>;

/* Enumerates the subdomains */
pub async fn enumerate(http_client: &Client, target: &str) -> Result<Vec<Subdomain>, Error> {
    /* Will carry about getting subdomains to check */
    let entries: Vec<CrtShEntry> = http_client
        .get(&format!("https://crt.sh/?q=%25.{}&output=json", target))
        .send()
        .await?
        .json()
        .await?; /* I dont actually know whats about await? after just json conversion? - Shouldn't it by sincronous? */
    /* Creates our DNS resolver - Maybe TOR would be valid at this point? */
    let dns_resolver = AsyncResolver::tokio(
        ResolverConfig::default(),
        ResolverOpts {
            timeout: Duration::from_secs(4),
            ..Default::default()
        },
    )
    .expect("subdomain resolver: building DNS client");

    // Clean the subdomains that arent valid anymore...
    let mut subdomains: HashSet<String> = entries
        .into_iter()
        .map(|entry| {
            entry
                .name_value
                .split('\n')
                .map(|subdomain| subdomain.trim().to_string())
                .collect::<Vec<String>>()
        })
        .flatten()
        .filter(|subdomain: &String| subdomain != target)
        .filter(|subdomain: &String| !subdomain.contains('*'))
        .collect();
    subdomains.insert(target.to_string());

    let subdomains: Vec<Subdomain> = stream::iter(subdomains.into_iter())
        .map(|domain| Subdomain {
            domain,
            open_ports: Vec::new(),
        })
        .filter_map(|subdomain| {
            let dns_resolver = dns_resolver.clone();
            /* Pay attetion to the "move" keyword here */
            async move {
                /* Try to resolve the subdomain name from domain */
                if resolves(&dns_resolver, &subdomain).await {
                    Some(subdomain) // Return the resolved
                } else {
                    None // Invalid (not in use anymore, or private access by IP and others)
                }
            }
        })
        .collect() // Lets collect the result
        .await; // Wait till every thread task is finished.

    Ok(subdomains) // Return the valid subdomains list
}

pub async fn resolves(dns_resolver: &DnsResolver, domain: &Subdomain) -> bool {
    dns_resolver.lookup_ip(domain.domain.as_str()).await.is_ok() // Check if the subdomain exists
}
