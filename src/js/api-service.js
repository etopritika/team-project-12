const BASE_URL = 'https://api.themoviedb.org/';
const API_KEY = '604d147cd55c0bcd03b68a72549a64de';

export default class ApiService {
  constructor() {
    this.searchQuery = ''; //Що шукаємо
    this.page = 1;
    this.movieId = '';
  }

  fetchArticles() {
    return fetch(
      `${BASE_URL}3/search/movie?api_key=${API_KEY}&query=${this.searchQuery}&language=en-US`
    )
      .then(response => response.json())
      .then(response => response.results)
  }

  fetchTrending() {
    return fetch(
      `${BASE_URL}3/trending/movie/week?api_key=${API_KEY}&page=${this.page}`
    )
      .then(response => response.json())
      .then(response => response.results);
  }

  fetchDetails() {
    return fetch(`
    ${BASE_URL}3/movie/${this.movieId}?api_key=${API_KEY}&language=en-US`)
    .then(response => response.json())
    .then(response => response);
  }

  fetchTrailer() {
    return fetch(`
    ${BASE_URL}3/movie/${this.movieId}/videos?api_key=${API_KEY}&language=en-US`)
    .then(response => response.json())
    .then(response => response);
  }

  incrementPage() {
    this.page = this.page + 1;
  }
  decrementPage() {
    this.page = this.page - 1;
  }


  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
  
  // get movieId() {
  //   return this.movieId;
  // }
  // set movieId(newID) {
  //   this.movieId = newID;
  // }
}
