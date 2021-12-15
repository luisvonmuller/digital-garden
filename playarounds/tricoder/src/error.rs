use thiserror::Error;

/* Definez sthe pattern | How to CLI or a debug of ReqWest... */
#[derive(Error, Debug, Clone)]
pub enum Error {
    #[error("Usage: tricoder <kerkour.com>")] // Defaults error message when no args provided
    CliUsage,
    #[error("Reqwest: {0}")]
    Reqwest(String),
}

// Makes the coersion between the two types of error messages
impl std::convert::From<reqwest::Error> for Error {
    fn from(err: reqwest::Error) -> Self {
        Error::Reqwest(err.to_string()) // Returns the error message to Self Structured.
    }
}
