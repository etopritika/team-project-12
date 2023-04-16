import ApiService from './api-service.js';
const apiService = new ApiService();
import { addWatchedMovieInLocalStorage } from './local-storage.js';
import { addQueueMovieInLocalStorage } from './local-storage.js';

const refs = {
    openModalBtn: document.querySelector('[data-action="open-modal"]'),
    modalConteiner: document.querySelector('.modal'),
};

refs.openModalBtn.addEventListener('click', onOpenModal);

export function onOpenModal() {
    document.body.classList.add('show-modal');
}

export function appendModalMarkup(movie) { 
    // console.log(movie);    
    const cardOfFilms = `
            <button>close</button>
            <div>
            <img  class="modal-img" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt=${movie.title} />
            </div>
            <div>
             <h2 class="title">${movie.title}</h2>
             <ul>
                 <li><span class="modal-item"> Vote / Votes</span>
                    <span class="vote_count"> ${movie.vote_count}</span></li>
                    <span class="vote_average">${movie.vote_average}</span>
                    <span class="modal-item"> / </span>
                 <li><span>Popularity</span><span class="popularity">${movie.popularity}</span></li>
                 <li><span>Original Title</span><span class="original-title">${movie.original_title}</span></li>
                 <li><span>Genre</span><span class="genres">${movie.genres}</span></li>
             </ul>
             <h3>About</h3>
             <p class="overview">${movie.overview}</p>
             <div>
             <button class="add-watched">add to Watched</button>
             <button class="add-queue">add to queue</button>
             </div>
             </div>`;
      
  refs.modalConteiner.innerHTML = cardOfFilms;
  
  const btnAddToWatched = document.querySelector('.add-watched');
  const btnAddToQueue = document.querySelector('.add-queue');

  btnAddToWatched.addEventListener('click', addWatchedMovieInLocalStorage);
  btnAddToQueue.addEventListener('click', addQueueMovieInLocalStorage);
}

    