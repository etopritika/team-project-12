import ApiService from './api-service.js';
import refs from './refs/refs.js';
const apiService = new ApiService();
import { addWatchedMovieInLocalStorage } from './local-storage.js';
import { addQueueMovieInLocalStorage } from './local-storage.js';



refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);

export function onOpenModal() {
  const loader_m = document.createElement('div');
  loader_m.classList.add('loader-modal');
  document.body.appendChild(loader_m);
  setTimeout(() => {
  loader_m.classList.add('loader-hidden-modal');
  }, 200);

  window.addEventListener('keydown', onEscKeyPress); 
  setTimeout(() => {
  document.body.classList.add('show-modal');
  }, 300);

  
}

function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  document.body.classList.remove('show-modal');
  clearAppendModalMarkup();
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
      onCloseModal();
  }
}

function onEscKeyPress(event) {
  if (event.code === 'Escape') {
      onCloseModal();
  };
}     

function clearAppendModalMarkup() {
  refs.modalConteiner.innerHTML = '';
}


