use futures::{stream, StreamExt}; // Asyncs the stream into threads and much more...
use reqwest::Client; // "Axios" like client
use std::{
    env,
    time::{Duration, Instant},
};

mod error;
pub use error::Error;
mod model;
mod ports;
mod subdomains;
use model::Subdomain;
mod common_ports;

#[tokio::main] // Derives its and Async Runtime...
async fn main() -> Result<(), anyhow::Error> {
    /* Gets args */
    let args: Vec<String> = env::args().collect();

    if args.len() != 2 {
        return Err(Error::CliUsage.into());
    }

    let target = args[1].as_str();

    let http_timeout = Duration::from_secs(10);
    let http_client = Client::builder().timeout(http_timeout).build()?;

    let ports_concurrency = 200;
    let subdomains_concurrency = 100;
    let scan_start = Instant::now(); // Start Timer.
                                     /* Lets enumarate out */
    let subdomains = subdomains::enumerate(&http_client, target).await?;

    // Concurrent stream method 1: Using buffer_unordered + collect
    let scan_result: Vec<Subdomain> = stream::iter(subdomains.into_iter())
        .map(|subdomain| ports::scan_ports(ports_concurrency, subdomain))
        .buffer_unordered(subdomains_concurrency) // Thats cool!
        .collect()
        .await;

    let scan_duration = scan_start.elapsed(); // Closes the Timer.
    println!("Scan completed in {:?}", scan_duration); // Shows up it.

    for subdomain in scan_result {
        println!("{}:", &subdomain.domain);
        for port in &subdomain.open_ports {
            println!("    {}: open", port.port);
        }

        println!(); // Empty arg print line macro to just skip one every result ...
    }

    Ok(())
}
