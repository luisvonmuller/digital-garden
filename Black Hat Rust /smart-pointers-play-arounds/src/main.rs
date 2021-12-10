#![allow(unused_assignments, unused_doc_comments)]
/*
   * ## A single-threaded reference-counting pointer. ‘Rc’ stands for ‘Reference Counted’. ##
   * Description. Imagine that U do REALLY want to count stuff by refcounting in memory, its kinda unsafe. But if you do...
   ! The inherent methods of Rc are all associated functions, which means that you have to call them as e.g.,
   ! Rc::get_mut(&mut value) instead of value.get_mut(). This avoids conflicts with methods of the inner type T.
   * Actually I should check it later again because the -> assume_init(self) -> Rc<[T]> is coming to stable, and thats kind usefull
*/
use std::rc::Rc;
/* I'll create some stuff here to playaround with threads and Rcs... */
fn main() {
    /* Creates a Smart Pointer to the number 1 - The actual reference in the memory for it */
    let mut number: i32 = 7;
    let pointer: Rc<i32> = Rc::new(number - 3); // We creates a instant snapshot of the value 4. We change it, but dont matters.
    number += 4;
    /**  Number is 11  
     * ! Also triggers "unused_assignments"warning
     * */
    /* Since: std::rc::Rc<i32>` cannot be sent between threads safely... <Imagine and unsafe ferris here/> */
    // unsafe {
    //     let pointer_to_poison = number as *mut i32;
    //     thread_play_arrounds(pointer_to_poison);
    // } // RESULTS INTO SEGFAULT... And thats great! I have to bad think a lot to do it, I've tryed with threads, maybe I'll push this later.
    {
        println!("{}", *pointer); /* Defers -> get the value and shows it */
        let second_pointer = pointer.clone(); // Rc::clone(&pointer) is also valid, but clone is kinda betters as its fp
        println!("{}", *second_pointer); /* Defers -> get the value from the memory */
    }
    /* The pointer still valids here. We had use it in a lower (child) scope when deferencing the pointer. */
    println!("At the end value is: {}", *pointer);
}

/* Since the Rc pointer doesn't have add operations and dysplays one I'll need to code them */

unsafe fn thread_play_arrounds(pointer_to_poison: *mut i32) {
    println!(
        "From the Unsafe thread the value is: {}",
        *pointer_to_poison
    );
}
