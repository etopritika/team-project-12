import ApiService from './api-service.js';
const apiService = new ApiService();

const refs = {
    openModalBtn: document.querySelector('[data-action="open-modal"]'),
    modalConteiner: document.querySelector('.modal'),
};

refs.openModalBtn.addEventListener('click', onOpenModal);

function onOpenModal() {
    document.body.classList.add('show-modal');
    
    apiService.fetchDetails().then(appendModalMarkup).catch(error => console.log(error));
}

function appendModalMarkup(movie) { 
    console.log(movie);    
    const cardOfFilms = movie.map(({poster_path, title, vote_average, vote_count, popularity, original_title, genres, overview}) => {
        return `
            <button>close</button>
            <div>
            <img  class="modal-img" src=${poster_path} alt=${title} />
            </div>
            <div>
             <h2 class="title">${title}</h2>
             <ul>
                 <li><span>Vote / Votes</span><span class="vote">${vote_average} ${vote_count}</span></li>
                 <li><span>Popularity</span><span class="popularity">${popularity}</span></li>
                 <li><span>Original Title</span><span class="original-title">${original_title}</span></li>
                 <li><span>Genre</span><span class="genres">${genres}</span></li>
             </ul>
             <h3>About</h3>
             <p class="overview">${overview}</p>
             <div>
             <button class="add-watched">add to Watched</button>
             <button class="add-queue">add to queue</button>
             </div>
             </div>`;}).join('');
      
          refs.modalConteiner.innerHTML = cardOfFilms;
      }

    