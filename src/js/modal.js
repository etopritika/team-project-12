import ApiService from './api-service.js';
const apiService = new ApiService();

const refs = {
    modalConteiner: document.querySelector('.modal'),
};

export function onOpenModal() {
    document.body.classList.add('show-modal');
}

export function appendModalMarkup(movie) { 
    // console.log(movie);    
    const cardOfFilms = `
    <button>close</button>
    <div class="modal-card">            
    <div >
    <img class="modal-img" src= https://image.tmdb.org/t/p/w500/${movie.poster_path} alt=${movie.title} />
    </div>
    <div class="modal-info">
     <h2 class="title">${movie.title}</h2>
     <ul class="catalog">
         <li class="modal-item-list"><span class="modal-item"> Vote / Votes</span><span  class="vote">${movie.vote_average}<span class="modal-item"> / </span> ${movie.vote_count}</span></li>
         <li class="modal-item-list"><span class="modal-item"> Popularity </span><span class="popularity">${movie.popularity}</span></li>
         <li class="modal-item-list"><span class="modal-item"> Original Title</span><span class="original-title">${movie.original_title}</span></li>
         <li class="modal-item-list"><span class="modal-item"> Genre</span><span class="genres">${movie.genres}</span></li>
     </ul>
     <h3 class="modal-about">ABOUT</h3>
     <p class="overview">${movie.overview}</p>
     <div class="modal-btn">
     <button class="add-watched">ADD TO WATCHED</button>
     <button class="add-queue">ADD TO QUEUE</button>
     </div>
     </div>
     </div>`;
      
          refs.modalConteiner.innerHTML = cardOfFilms;
      }

    