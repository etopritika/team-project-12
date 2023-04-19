import ApiService from './api-service';
import genres from './data/genres.json';
import refs from './refs/refs';
import renderMovies from './template/card-film-template';
const apiService = new ApiService();

refs.form.addEventListener('submit', onSearch);

export function onSearch(e) {
  e.preventDefault();
  apiService.query = e.currentTarget.elements.query.value;
  refs.loader.classList.remove('loader-hidden'); // показати спінер
  fetchSearchMovies();
  hidePagination();
  // const clearPagination = document.querySelector(".tui-pagination");
  // clearPagination.style.display = "none";
}

function fetchSearchMovies() {
  apiService
    .fetchArticles()
    .then(renderMovies) //Повертає масив пошуку фільму
    .finally(() => {
      refs.loader.classList.add('loader-hidden'); // приховати спінер
    });
}

function hidePagination() {
  document.getElementById('tui-pagination-container').hidden = true;
  document.querySelector('.movie-cards-wrapper').style.marginBottom = '32px';
}

