import Notiflix from 'notiflix';
import refs from './refs';


function renderWatchedMovies() {
  const parsedLocalStorageData = JSON.parse(localStorage.getItem('watched-movies'));
  
  refs.movieContainer.innerHTML = '';

  if (parsedLocalStorageData === `` || parsedLocalStorageData === null) {
    Notiflix.Notify.info('Your watched films library is empty');
  }
  else {
    renderMovie(parsedLocalStorageData);
  }
}
function renderQueueMovies() {
  const parsedLocalStorageData = JSON.parse(localStorage.getItem('queue-movies'));
  
  refs.movieContainer.innerHTML = '';

  if (parsedLocalStorageData === ``  || parsedLocalStorageData === null) {
    Notiflix.Notify.info('Your queued films library is empty');
    document.querySelector('.container').style.marginBottom="260px"
  }
  else {
    renderMovie(parsedLocalStorageData);
 
  }
}

function renderMovie(movies) {
 
 refs.movieTrand.innerHTML = movies
    .map(
      movie => `
        <li class="movie-card__item" data-film-id="${movie.id}">
            <img class="movie-card__image" src="https://image.tmdb.org/t/p/w500/${
              movie.poster_path
            }" alt="${movie.title}" />
            <h2 class="movie-card__title">
              ${movie.title}
            </h2>
            <div class="movie-card__info">
            <p class="movie-card__genre">
              ${movie.genres.map(genre => genre)}
          </p>
          <p class="movie-card__release-date">
            <a class="movie-card__link" href="https://www.themoviedb.org/movie/${
              movie.id
            }?language=en-US">
            ${movie.release_date.split('-')[0]}
            </a>
          </p>  
            </div>
            
        </li>
      `
    )
    .join('');
}

refs.btnWatched.addEventListener('click', renderWatchedMovies);
refs.btnQueue.addEventListener('click', renderQueueMovies);

