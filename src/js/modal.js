import ApiService from './api-service.js';
const apiService = new ApiService();

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
                 <li><span>Vote / Votes</span><span class="vote">${movie.vote_average} ${movie.vote_count}</span></li>
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
      }

    