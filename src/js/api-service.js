const BASE_URL = 'https://api.themoviedb.org/';
const API_KEY = '604d147cd55c0bcd03b68a72549a64de';

export default class ApiService {
  constructor() {
    this.searchQuery = ''; //Що шукаємо
    this.page = 1;
  }

  fetchArticles() {
    return fetch(
      `${BASE_URL}3/search/movie?api_key=${API_KEY}&query=${this.searchQuery}`
    )
      .then(response => response.json())
      .then(response => response.results)
  }

  fetchPopular() {
    return fetch(
      `${BASE_URL}3/movie/popular?api_key=${API_KEY}&page=${this.page}`
    )
      .then(response => response.json())
      .then(response => response.results);
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
