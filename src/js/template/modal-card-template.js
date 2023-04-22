import refs from '../refs/refs';
import { addWatchedMovieInLocalStorage } from '../local-storage.js';
import { addQueueMovieInLocalStorage } from '../local-storage.js';
import { removeFromQueue } from '../local-storage.js';
import { removeFromWatched } from '../local-storage.js';

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
            <div> ${movie.genres.map( genre => `<span > ${genre.name} </span>`).join(',&nbsp')}</div>
          </li>
     </ul>
     <h3 class="modal-about">ABOUT</h3>
     <p class="modal-overview">${movie.overview}</p>
     <div class="modal-btn">
     <button class="modal-add-watched">ADD TO WATCHED</button>
     <button class="modal-add-queue">ADD TO QUEUE</button>
     </div>
     </div>
     </div>`;

  refs.modalConteiner.insertAdjacentHTML('beforeend', cardOfFilms);
  const btnAddToWatched = document.querySelector('.modal-add-watched');
  const btnAddToQueue = document.querySelector('.modal-add-queue');

  btnAddToWatched.addEventListener('click', addWatchedMovieInLocalStorage);
  btnAddToQueue.addEventListener('click', addQueueMovieInLocalStorage);


// один з варіантів поки не працює
btnAddToWatched.addEventListener('click', () => {
  if (btnAddToWatched.textContent === 'Add to watched') {
    addWatchedMovieInLocalStorage();
    btnAddToWatched.textContent = 'Remove from watched';
  } else {
    removeFromWatched();
  }
});

btnAddToQueue.addEventListener('click', () => {
  if (btnAddToQueue.textContent === 'Add to queue') {
    addQueueMovieInLocalStorage();
    btnAddToQueue.textContent = 'Remove from queue';
  } else {
    removeFromQueue();
  }
});
}
