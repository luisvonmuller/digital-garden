use serde::Deserialize; // To Showout

#[derive(Debug, Clone)]
pub struct Subdomain {
    pub domain: String,        // Domain name
    pub open_ports: Vec<Port>, // Which ports are open after checking it
}

#[derive(Debug, Clone)]
pub struct Port {
    pub port: u16,     // Port to check
    pub is_open: bool, // Is the port open?
}

#[derive(Debug, Deserialize, Clone)]
pub struct CrtShEntry {
    pub name_value: String,
}
