class UI {

    static addMovieToUI(newMovie) {
        const movieList = document.getElementById('movies');
        movieList.innerHTML += `
        <tr>
            <td><img src="${newMovie.url}" class="img-fluid img-thumbnail" width="200"></td>
                <td>${newMovie.title}</td>
                <td>${newMovie.director}</td>
            <td><a href="#" id = "delete-movie" class = "btn btn-danger">Delete Movie</a></td>
        </tr>
    `;
    }

    static clearInputs(element1, element2, element3) {
        element1.value = '';
        element2.value = '';
        element3.value = '';
    }

    static displayMessages(message, type) {
        const cardBody = document.querySelector('.card-body');
        // Create Alert
        const div = document.createElement("div");
        div.className = `alert alert-${type}`;
        div.textContent = message;
        // Alert Append Handle
        cardBody.appendChild(div);
        // Alert Destroy
        setTimeout(() => {
            div.remove();
        }, 3000);
    }

    static loadAllMovies(movies) {
        const movieList = document.getElementById('movies');
        movies.forEach(function (movie) {
            movieList.innerHTML += `<tr>
            <td><img src="${movie.url}" class="img-fluid img-thumbnail" width="200"></td>
                <td>${movie.title}</td>
                <td>${movie.director}</td>
            <td><a href="#" id = "delete-movie" class = "btn btn-danger">Delete Movie</a></td>
        </tr>`;
        });
    }

    static deleteMovieFromUI(element) {
        element.parentElement.parentElement.remove();
    }

    static clearAllMoviesFromUI() {
        const movieList = document.getElementById('movies');
        while (movieList.firstElementChild !== null) {
            movieList.firstElementChild.remove();
        }
    }
}
