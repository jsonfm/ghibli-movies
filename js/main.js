const URL_API = 'https://ghibliapi.herokuapp.com/films'
const moviesContainer = document.getElementById('moviesContainer');

const getMovies = async () => {
    return await fetch(URL_API).then(res => res.json());
}

const renderSingleMovie = (movie) => {
    const html = `
        <div class="movie-container">
            <img src="${movie.image}" class="movie-image" alt="movie-poster"/>
            <h3 class="title movie-title">${movie.title}</h3>
        </div>
    `
    return html;
}

const renderMoviesList = (movies) => {
    let html = ''
    movies.map((movie) => html += renderSingleMovie(movie));
    moviesContainer.innerHTML = html;
}

getMovies().then((movies) => {
    renderMoviesList(movies);
});