import  Pagination  from 'tui-pagination';
import refs from './refs/refs';
import ApiService from './api-service.js';
import renderMovies from './template/card-film-template';


const apiService = new ApiService();

// отримання поточної сторінки
const pagination = new Pagination(refs.container, {
  totalItems: 1000,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
  centerAlign: true,
});

export function fetchMovies(page) {
  apiService.moviePage = page;
  apiService.fetchTrending().then(data => {
    renderMovies(data.results);
  }).catch(error => console.log(error));
}

pagination.on('afterMove', event => {
  const currentPage = event.page;
  fetchMovies(currentPage);
});
