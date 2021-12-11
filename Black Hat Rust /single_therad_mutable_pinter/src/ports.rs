use crate::{
    common_ports::MOST_COMMON_PORTS_10,
    model::{Port, Subdomain},
};
use rayon::prelude::*;
use std::net::{SocketAddr, ToSocketAddrs};
use std::{net::TcpStream, time::Duration};

pub fn scan_ports(mut subdomain: Subdomain) -> Subdomain {
    subdomain.open_ports = MOST_COMMON_PORTS_10
        .into_iter()
        .map(|port| scan_port(&subdomain.domain, *port))
        .filter(|port| port.is_open) // filter closed ports
        .collect();
    subdomain
}

fn scan_port(hostname: &str, port: u16) -> Port {
    /* This is where shit happens */
    let timeout = Duration::from_secs(3);

    /* Creates the Vec![Addresses]... */
    let socket_addresses: Vec<SocketAddr> = format!("{}:{}", hostname, port)
        .to_socket_addrs()
        .expect("port scanner: Creating socket address")
        .collect();

    /* nothing to check, will exit the function */
    if socket_addresses.len() == 0 {
        return Port {
            port: port,
            is_open: false,
        };
    }
    /* Checks */
    let is_open = if let Ok(_) = TcpStream::connect_timeout(&socket_addresses[0], timeout) {
        true // Successfully opened the conection
    } else {
        false // Failed as I did in life :K
    };
    /* Returns the Port data stuctures as wanted ... */
    Port {
        port: port,
        is_open,
    }
}
