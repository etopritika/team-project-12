import refs from '../refs/refs';
import { addWatchedMovieInLocalStorage } from '../local-storage.js';
import { addQueueMovieInLocalStorage } from '../local-storage.js';

export function appendModalMarkup(movie) {
  const cardOfFilms = `
  
     <div class="modal-card" data-film-id="${movie.id}">
            
    <div >
    <img class="modal-img" src= https://image.tmdb.org/t/p/w500/${
      movie.poster_path
    } alt=${movie.title} />
    </div>
    <div class="modal-info" data-release-date="${movie.release_date}">
     <h2 class="modal-title">${movie.title}</h2>
     <ul class="modal-catalog">
         <li class="modal-item-list">
             <span class="modal-item"> Vote / Votes</span>
             <span class="modal-vote_average">${movie.vote_average.toFixed(
               1
             )}</span>
             <span > / </span>
             <span class="modal-vote_count"> ${movie.vote_count}</span>
         </li>
         <li class="modal-item-list"><span class="modal-item"> Popularity </span><span class="modal-popularity">${movie.popularity.toFixed(
           1
         )}</span></li>
         <li class="modal-item-list">
            <div class="modal-item-title">
            <span >Original</span> <span > Title</span>
            </div>
            <div class="modal-original-title">
            <span >${movie.original_title}</span>
            </div>
          </li>
         <li class="modal-item-list">
            <div class="modal-item-genres"> <span > Genre</span></div>
            <div> ${movie.genres
              .map(genre => `<span > ${genre.name} </span>`)
              .join(',&nbsp')}</div>
          </li>
     </ul>
     <h3 class="modal-about">ABOUT</h3>
     <p class="modal-overview">${movie.overview}</p>
     <div class="modal-btn">
     <button class="modal-add-watched">${checkWatchedFilm(
       movie.overview
     )}</button>
     <button class="modal-add-queue">${checkQueueFilm(movie.overview)}</button>
     </div>
     </div>
     </div>`;

  refs.modalConteiner.insertAdjacentHTML('beforeend', cardOfFilms);
  const btnAddToWatched = document.querySelector('.modal-add-watched');
  const btnAddToQueue = document.querySelector('.modal-add-queue');
  // btnAddToWatched.onclick = () =>
  //   // document.querySelector('.movie-card__item').remove();
  // btnAddToQueue.onclick = () =>
  //   // document.querySelector('.movie-card__item').remove();
  btnAddToWatched.addEventListener('click', addWatchedMovieInLocalStorage);
  btnAddToQueue.addEventListener('click', addQueueMovieInLocalStorage);
}

function checkWatchedFilm(overview) {
  let savedWatchedMovies = [];
  if (localStorage.getItem('watched-movies')) {
    savedWatchedMovies = JSON.parse(localStorage.getItem('watched-movies'));
  }

  const watchedIndex = savedWatchedMovies.findIndex(
    savedMovie => savedMovie.overview === overview
  );

  if (watchedIndex !== -1) {
    return 'Remove from Watched';
  } else {
    return 'Add to watched';
  }
}

function checkQueueFilm(overview) {
  let savedWatchedMovies = [];
  if (localStorage.getItem('queue-movies')) {
    savedWatchedMovies = JSON.parse(localStorage.getItem('queue-movies'));
  }

  const watchedIndex = savedWatchedMovies.findIndex(
    savedMovie => savedMovie.overview === overview
  );

  if (watchedIndex !== -1) {
    return 'Remove from Queue';
  } else {
    return 'Add to Queue';
  }
}
