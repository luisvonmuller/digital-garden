use std::cell::{RefCell, RefMut};
use std::rc::Rc;

/* Sadly this kind of implementatio only works with single thread (just single threads - nor async, not multiple threads) */
fn main() {
    /* Creates a new mutable Shared pointer (Single thread) */
    let shared_string = Rc::new(RefCell::new("Hello".to_string())); // Instancing into the pointer the "Hello String"

    {
        /* Creates a new mutable REFERENCE string */
        let mut hello_world: RefMut<String> = shared_string.borrow_mut(); // Copys the reference <mut RcCell<T>> (& mut)
        hello_world.push_str(" World"); // Appends the string
    }

    println!("{}", shared_string.take());
}
