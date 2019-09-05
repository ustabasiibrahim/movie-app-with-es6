const form = document.getElementById('movie-form');
const titleElement = document.querySelector('#title');
const directorElement = document.querySelector('#director');
const urlElement = document.querySelector('#url');
const cardBody = document.querySelectorAll('.card-body')[1];
const clear = document.getElementById('clear-movies');

// All Event Load
eventListeners();

function eventListeners() {
    form.addEventListener('submit', addMovie);
    document.addEventListener('DOMContentLoaded', function () {
        let movies = Store.getMoviesFromStore();
        UI.loadAllMovies(movies);
    });

    cardBody.addEventListener('click', deleteMovie);
    clear.addEventListener('click', clearAllMovies);
}

function addMovie(e) {
    e.preventDefault();

    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if (!title || !director || !url) {
        UI.displayMessages('Please be sure to fill in all fields', 'danger');
    } else {
        // New Movie Object
        const newMovie = new Movie(title, director, url);
        UI.addMovieToUI(newMovie); // Add movies to UI
        Store.addMovieToStore(newMovie); // Add movies to STORAGE
        UI.displayMessages('Movie added successfully!', 'success');
    }
    UI.clearInputs(titleElement, urlElement, directorElement); // Form clear

    e.preventDefault();
}

function deleteMovie(e) {
    if(e.target.id === "delete-movie") {
        UI.deleteMovieFromUI(e.target);
        Store.deleteMovieFromStore(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        UI.displayMessages("Movie deleted successfully", "success");
    }
}

function clearAllMovies() {
    if(confirm("Are u sure?")) {
        UI.clearAllMoviesFromUI();
        Store.clearAllMoviesFromStore();
        UI.displayMessages('Movies Deleted', 'success');
    }
}
