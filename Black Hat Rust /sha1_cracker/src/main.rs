use std::env;

fn main() {
    let args: Vec<String> = env::args().collect(); /* Gives brand new Strings */

    if args.len() != 3 {
        println!("Usage:");
        println!("sha1_cracker: <wordlist.txt> <sha1_hash>") 
        /* Acually we should use "return" keywork as much as we can in Rust */ 
    } 

    panic!("I don't have implemented this yet lol")
}
