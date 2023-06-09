import Notiflix from 'notiflix';
import refs from './refs/refs';
import { appendModalMarkup } from './template/modal-card-template'

export function addWatchedMovieInLocalStorage() {
  const modal = document.querySelector('.modal');

  const id = document.querySelector('.modal-card').getAttribute('data-film-id');
  const poster_path = document.querySelector('.modal-img').getAttribute('src');
  const release_date = document
    .querySelector('.modal-info')
    .getAttribute('data-release-date');
  const vote_average = document.querySelector(
    '.modal-vote_average'
  ).textContent;
  const vote_count = document.querySelector('.modal-vote_count').textContent;
  const popularity = document.querySelector('.modal-popularity').textContent;
  const original_title = document.querySelector(
    '.modal-original-title'
  ).textContent;
  let genres = document.querySelectorAll('.genres');
  const overview = document.querySelector('.modal-overview').textContent;
  const title = document.querySelector('.modal-title').textContent;
  let genresArr = [];

  for (let i = 0; i < genres.length; i += 1) {
    genresArr.push(genres[i].textContent);
  }

  const movieDetails = {
    id,
    release_date,
    poster_path,
    title,
    vote_average,
    vote_count,
    popularity,
    original_title,
    genres: genresArr,
    overview,
  };

  let savedQueueMovies = [];
  if (localStorage.getItem('queue-movies')) {
    savedQueueMovies = JSON.parse(localStorage.getItem('queue-movies'));
  }

  const queueIndex = savedQueueMovies.findIndex(
    savedMovie => savedMovie.overview === overview
  );

  if (queueIndex !== -1) {
    Notiflix.Notify.info('This movie is already in your library');
    return;
  }

  let savedWatchedMovies = [];
  if (localStorage.getItem('watched-movies')) {
    savedWatchedMovies = JSON.parse(localStorage.getItem('watched-movies'));
  }

  const watchedIndex = savedWatchedMovies.findIndex(
    savedMovie => savedMovie.overview === overview
  );

 
  const buttonWatched = document.getElementsByClassName('modal-add-watched')[0];

  if (watchedIndex !== -1) {
    savedWatchedMovies.splice(watchedIndex, 1);
    localStorage.setItem('watched-movies', JSON.stringify(savedQueueMovies));
    buttonWatched.textContent = 'Add to Watched';
    if (!refs.homeButton.classList.contains('is_active')) {
      const container = document.getElementsByClassName('movie-cards')[0];
      const elementsToDelete = container.querySelectorAll(
        `[data-film-id='${movieDetails.id}']`
      );
      elementsToDelete.forEach(function (element) {
        element.remove();
      });
    }
    return;
  }

  savedWatchedMovies.push(movieDetails);
  buttonWatched.textContent = 'Remove from Watched';
  localStorage.setItem('watched-movies', JSON.stringify(savedWatchedMovies));
}

export function addQueueMovieInLocalStorage() {
  const modal = document.querySelector('.modal');

  const id = document.querySelector('.modal-card').getAttribute('data-film-id');
  const poster_path = document.querySelector('.modal-img').getAttribute('src');
  const release_date = document
    .querySelector('.modal-info')
    .getAttribute('data-release-date');
  const vote_average = document.querySelector(
    '.modal-vote_average'
  ).textContent;
  const vote_count = document.querySelector('.modal-vote_count').textContent;
  const popularity = document.querySelector('.modal-popularity').textContent;
  const original_title = document.querySelector(
    '.modal-original-title'
  ).textContent;
  let genres = document.querySelectorAll('.genres');
  const overview = document.querySelector('.modal-overview').textContent;
  const title = document.querySelector('.modal-title').textContent;
  let genresArr = [];

  for (let i = 0; i < genres.length; i += 1) {
    genresArr.push(genres[i].textContent);
  }

  const movieDetails = {
    id,
    release_date,
    poster_path,
    title,
    vote_average,
    vote_count,
    popularity,
    original_title,
    genres: genresArr,
    overview,
  };

  let savedWatchedMovies = [];
  if (localStorage.getItem('watched-movies')) {
    savedWatchedMovies = JSON.parse(localStorage.getItem('watched-movies'));
  }

  const watchedIndex = savedWatchedMovies.findIndex(
    savedMovie => savedMovie.overview === overview
  );

  if (watchedIndex !== -1) {
    Notiflix.Notify.info('This movie is already in your library');
    return;
  }

  let savedQueueMovies = [];
  if (localStorage.getItem('queue-movies')) {
    savedQueueMovies = JSON.parse(localStorage.getItem('queue-movies'));
  }

  const queueIndex = savedQueueMovies.findIndex(
    savedMovie => savedMovie.overview === overview
  );

  const buttonQueue = document.getElementsByClassName('modal-add-queue')[0];

  if (queueIndex !== -1) {
    savedQueueMovies.splice(queueIndex, 1);
    localStorage.setItem('queue-movies', JSON.stringify(savedQueueMovies));
    buttonQueue.textContent = 'Add to Queue';
    if (!refs.homeButton.classList.contains('is_active')) {
      const container = document.getElementsByClassName('movie-cards')[0];
      const elementsToDelete = container.querySelectorAll(
        `[data-film-id='${movieDetails.id}']`
      );
      elementsToDelete.forEach(function (element) {
        element.remove();
      });
    }

    return;
  }

  savedQueueMovies.push(movieDetails);
  buttonQueue.textContent = 'Remove from Queue';
  localStorage.setItem('queue-movies', JSON.stringify(savedQueueMovies));
}


