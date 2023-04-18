import  Pagination  from 'tui-pagination';

// добавлю пока такі стилі які є з пагінацією а коли уже буде видно шо як буду добавляти scss
import ApiService from './api-service.js';
import renderMovies from './render-trandFilms';
import onSearch from "./search-form.js";

const apiService = new ApiService();

// отримання поточної сторінки


const container = document.getElementById('tui-pagination-container');

const pagination = new Pagination(container, {
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

// fetchMovies(1);