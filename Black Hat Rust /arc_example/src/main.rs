use std::sync::{Arc, Mutex};
use std::thread;

fn main() {
    /* Creates a new mutable pointer that cann be shared between threads */
    let pointer = Arc::new(Mutex::new(5)); /* Mutex<T> wheres T equals pseudo type {integer} */
    let second_pointer = pointer.clone(); // Arc::clone(&pointer) is also valid here, but this kind of syntax sugar is cool tho
                                          /* Spawn the thread */
    thread::spawn(move || {
        let mut mutable_pointer = second_pointer.lock().unwrap(); /* Theres the need to LOCK  the mutex */
        *mutable_pointer = 1; // Set the new value (* is used to set the value not the pointer itself)
    });

    let one = pointer.lock().unwrap(); // Always lock the mutex before ever read, ever just reading. Thats important because of rc...
    println!("{}", one); // 1
}
