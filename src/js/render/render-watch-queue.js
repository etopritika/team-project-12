import Notiflix from 'notiflix';
import refs from '../refs/refs';
import renderMovie from "../template/library-card-template";

function renderWatchedMovies() {
  const parsedLocalStorageData = JSON.parse(localStorage.getItem('watched-movies'));
  
  refs.movieContainer.innerHTML = '';
  console.log(parsedLocalStorageData);
  if (parsedLocalStorageData.length === 0) {
    Notiflix.Notify.info('Your watched films library is empty');
  }
  else {
    renderMovie(parsedLocalStorageData);
  }
}
function renderQueueMovies() {
  const parsedLocalStorageData = JSON.parse(localStorage.getItem('queue-movies'));
  
  refs.movieContainer.innerHTML = '';

  if (parsedLocalStorageData.length === 0) {
    Notiflix.Notify.info('Your watched films library is empty');
  }
  else {
    renderMovie(parsedLocalStorageData);
 
  }
}


refs.btnWatched.addEventListener('click', renderWatchedMovies);
refs.btnQueue.addEventListener('click', renderQueueMovies);

