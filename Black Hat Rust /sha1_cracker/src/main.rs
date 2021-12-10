use sha1::Digest;
use std::{
    env,
    error::Error,
    fs::File,
    io::{BufRead, BufReader},
};

/* Gets buffer like (usize) */
const SHA1_HEX_STRING_LENGTH: usize = 40;

fn main() -> Result<(), Box<dyn Error>> {
    /* Collects the process args as an Vector of Strings (Not strs); */
    let args: Vec<String> = env::args().collect();

    /* First we check if theres enought args to proceed, if not we will return */
    if args.len() != 3 {
        println!("Usage:");
        println!("sha1_cracker: <word_list.txt> <sha1_hash>");
        return Ok(()); // Closes the program because theres a lot of or not enought args.
    }

    let hash_to_crack = args[2].trim();
    if hash_to_crack.len() != SHA1_HEX_STRING_LENGTH {
        return Err("sha1 hash is not valid".into());
    }
    /* Defines the wordlist that we will use to compera and over validate things*/
    let word_list_file = File::open(&args[1])?;
    /* Creates an Buffer in the memory (I thinks it is on the Heap). */
    let reader = BufReader::new(&word_list_file);
    /* Iterates over all lines from the wordlist comparing it with the current line */
    for line in reader.lines() {
        /* If there is an line */
        let line = line?;
        /* Trims it to get just the word with line breaks etc */
        let common_password = line.trim();
        /* Gonna try to guess the common password by diggesting the Line as a new Hash */
        if hash_to_crack == hex::encode(sha1::Sha1::digest(common_password.as_bytes())) {
            /* When We find it, we show it */
            println!("Password found: {}", &common_password);
            return Ok(()); // Closes the program when Hash is found */
        }
    }

    Ok(())
}
