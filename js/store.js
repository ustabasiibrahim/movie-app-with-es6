class Store {
    static addMovieToStore(newMovie) {
        let movies = this.getMoviesFromStore();
        movies.push(newMovie);
        localStorage.setItem('movies', JSON.stringify(movies));
    };

    static getMoviesFromStore() {
        let movies;
        if (localStorage.getItem('movies') === null) {
            movies = [];
        } else {
            movies = JSON.parse(localStorage.getItem('movies'));
        }
        return movies;
    };

    static deleteMovieFromStore(movieTitle) {
        let movies = this.getMoviesFromStore();
        movies.forEach(function (movie, index) {
            if (movie.title === movieTitle) {
                movies.splice(index, 1);
            }
        });
        localStorage.setItem('movies', JSON.stringify(movies));
    };

    static clearAllMoviesFromStore() {
        localStorage.removeItem('movies');
    };
}
