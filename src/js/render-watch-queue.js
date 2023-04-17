function renderWatchedMovies() {
  const parsedLocalStorageData = JSON.parse(localStorage.getItem('watched-movies'));
  const movieContainer = document.querySelector('.movie-cards');
  movieContainer.innerHTML = '';

  parsedLocalStorageData.forEach( obj => {
    const movie = renderMovie(obj);
    movieContainer.appendChild(movie);
  });
}

function renderQueueMovies() {
  const parsedLocalStorageData = JSON.parse(localStorage.getItem('queue-movies'));
  const movieContainer = document.querySelector('.movie-cards');
  movieContainer.innerHTML = '';

  parsedLocalStorageData.forEach( obj => {
    const movie = renderMovie(obj);
    movieContainer.appendChild(movie);
  });
}

function renderMovie(obj) {
  const movie = document.createElement('li');
  movie.classList.add('movie-card__item');
  movie.innerHTML = `
  <img class="movie-card__image" src="https://image.tmdb.org/t/p/w500/${obj.poster_path}" alt="${obj.title}" />
            <h2 class="movie-card__title">
              ${obj.title}
            </h2>
            <p>${obj.release_date}<p/>
            <p>${obj.genres}<p/>
            <div class="movie-card__info">
            </div>
  `
  return movie;
}
const btnTest1 = document.querySelector('.test1');
btnTest1.addEventListener('click', renderWatchedMovies);

const btnTest2 = document.querySelector('.test2');
btnTest2.addEventListener('click', renderQueueMovies);
