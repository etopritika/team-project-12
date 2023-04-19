import ApiService from './api-service.js';
import refs from './refs/refs.js';
const apiService = new ApiService();
import { addWatchedMovieInLocalStorage } from './local-storage.js';
import { addQueueMovieInLocalStorage } from './local-storage.js';



refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);

export function onOpenModal() {
  window.addEventListener('keydown', onEscKeyPress);
  document.body.classList.add('show-modal');
  
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

