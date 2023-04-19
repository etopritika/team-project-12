import Notiflix from 'notiflix';
import refs from '../refs/refs';

function renderMyLibrary() {
  const parsedWatched =
    JSON.parse(localStorage.getItem('watched-movies')) || [];
  const parsedQueue = JSON.parse(localStorage.getItem('queue-movies')) || [];
  const allParsedMovies = parsedWatched.concat(parsedQueue);
  if (allParsedMovies.length === 0) {
    Notiflix.Notify.info('Your films library is empty');
  } else if (allParsedMovies.length === 1) {
  }

  refs.movieContainer.innerHTML = '';
  renderMovie(allParsedMovies);
}

function renderMovie(movies) {
  // const loader = document.createElement('div');
  // loader.classList.add('loader');
  // loader.id = 'loader';
  // document.body.appendChild(loader);

  refs.movieTrand.innerHTML = '';
  // refs.movieTrand.appendChild(loader);

  setTimeout(() => {
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
    // const loader = document.getElementById('loader');
    // loader.classList.add('loader-hidden');
  }, 500);
}

refs.btnMyLibrary.addEventListener('click', renderMyLibrary);

refs.btnMyLibrary.onclick = function () {
  document.getElementById('tui-pagination-container').hidden = true;
  document.querySelector('.movie-cards-wrapper').style.marginBottom = '32px';
};
