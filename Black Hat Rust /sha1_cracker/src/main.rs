use std::env;

/* Gets buffer like (usize) */
const SHA1_HEX_STRING_LENGTH: usize = 40;
fn main() {
    let args: Vec<String> = env::args().collect(); /* Gives brand new Strings */

    if args.len() != 3 {
        println!("Usage:");
        println!("sha1_cracker: <wordlist.txt> <sha1_hash>")
        /* Acually we should use "return" keywork as much as we can in Rust */
    }

    let hash_to_crack = args[2].trim();
    if hash_to_crack.len() != SHA1_HEX_STRING_LENGTH {
        return Err("sha1 hash is not valid".into());
    }

    panic!("I don't have implemented this yet lol")
}
