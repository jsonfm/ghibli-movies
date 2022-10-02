const URL_API = 'https://ghibliapi.herokuapp.com/films'
const moviesContainer = document.getElementById('moviesContainer');

const getMovies = async () => {
    const response = await fetch(URL_API);
    return await response.json()
}

const renderSingleMovie = (movie) => {
    if(!movie) return ``;
    const html = `
        <div class="movie-container">
            <img src="${movie.image}" class="movie-image"/>
            <h3 class="movie-title">${movie.title}</h3>
        </div>
    `
    return html;
}

const renderMoviesList = (movies) => {
    let html = ''
    movies.map((movie) => {
        html += renderSingleMovie(movie); 
    });
    moviesContainer.innerHTML = html;
}

getMovies().then((movies) => {
    renderMoviesList(movies);
});