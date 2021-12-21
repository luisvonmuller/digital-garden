use std::sync::{Arc, Mutex};

/* Mutex Optin which real matters */
#[derive(Debug, PartialEq)]
pub struct Room {
    pub client: isize, // id
    pub clerk: isize,  // id
    pub id: u64,       // room_id:  Room Id (Temporary)
}

// Type Aliasing like to get Arc, etc... functions...
type Rooms = Arc<Mutex<Option<Vec<Room>>>>;

fn main() {
    /* Inits the Arc Mutex */
    let mut rooms: Rooms = Arc::new(Mutex::new(None));
    assert_eq!(*rooms.lock().unwrap(), None); // Tests for None

    rooms = play_arounds(rooms);
    // Tests for 10 rooms
    if let Some(rcollection) = &*rooms.lock().unwrap() {
        assert_eq!(rcollection.len(), 10);
    }

    // println!("{:#?}", rooms);
    println!("{:?}", *rooms.lock().unwrap());
}

fn play_arounds(mut rooms: Rooms) -> Rooms {
    let pseudo_rooms = rooms.clone();
    for _tryout in 0..10 {
        if let Some(collection) = &mut *pseudo_rooms.lock().unwrap() {
            collection.push(Room {
                client: 1,
                clerk: 2,
                id: _tryout,
            });
        } else {
            rooms = Arc::new(Mutex::new(Some(Vec::<Room>::new())));
            return play_arounds(rooms);
        };
    }
    pseudo_rooms
}
