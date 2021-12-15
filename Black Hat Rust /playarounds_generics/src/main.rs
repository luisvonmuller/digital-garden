use serde::{Deserialize, Serialize};
use std::fmt::Debug;

#[derive(Debug, Clone, Serialize, Deserialize)]
struct Point<'a, T: Debug + Clone + Serialize + Deserialize<'a>> {
    x: T,
    y: T,
}

impl<'a> Point<'_, i32> {
    fn new<T>(self) -> &'a Self {
        return &self;
    }
}

// I really don't want to continue using this trait because I cant fucking understand LOLOLOL
impl<'de: 'a, 'a, T> Deserialize<'de> for Point<'_, &'a T> where T: Deserialize<'de> {}

// impl fmt::Display for Point<T> {
//     fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
//         write!(f, "({}, {})", self.x, self.y)
//     }
// }

fn main() {
    let mut x = Point { x: 12, y: 23 };
    println!("{:?}", x);
}
