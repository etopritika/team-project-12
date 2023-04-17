import Notiflix from 'notiflix';
const BASE_URL = 'https://api.themoviedb.org/';
const API_KEY = '604d147cd55c0bcd03b68a72549a64de';
const LANGUAGE = 'en';


export default class ApiService {
  constructor() {
    this.searchQuery = ''; //Що шукаємо
    this.page = 1; //Пагінація
    this.getMovieId = ''; //Пошук по id
  }

  fetchArticles() {
    return fetch(
      `${BASE_URL}3/search/movie?api_key=${API_KEY}&query=${this.searchQuery}&page=${this.page}&language=en-US`
    )
      .then(response => response.json())
      .then(response => response.results)
      .then(result => {
        
        if(result.length === 0) {
          Notiflix.Notify.failure('Search result not successful. Enter the correct movie name.');
          return;
        }
        return result;
      })
  }

  fetchTrending() {
    return fetch(
      `${BASE_URL}3/trending/movie/week?api_key=${API_KEY}&page=${this.page}&language=en-US`
    )
      .then(response => response.json())
      .then(response => response)
      
  }

  fetchDetails() {
    return fetch(`
    ${BASE_URL}3/movie/${this.getMovieId}?api_key=${API_KEY}&language=en-US`)
    .then(response => response.json())
    .then(response => response);
  }

  fetchTrailer() {
    return fetch(`
    ${BASE_URL}3/movie/${this.getMovieId}/videos?api_key=${API_KEY}&language=en-US`)
    .then(response => response.json())
    .then(response => response);
  }

  incrementPage() {
    this.page = this.page + 1;
  }
  decrementPage() {
    this.page = this.page - 1;
  }
  resetPage() {
    this.page = 1;
  }
  
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
  
  get movieId() {
    return this.getMovieId;
  }
  set movieId(newID) {
    this.getMovieId = newID;
  }
  get moviePage() {
    return this.page;
  }

  set moviePage(newPage) {
    this.page = newPage;
  }
}

// apiService.fetchArticles();//Повертає масив пошуку фільму
// apiService.fetchTrending();//Повертає масив популярних фільмів
// apiService.fetchDetails();//Повертає повну інформацію про фільм, потрібен id фільму
// apiService.fetchTrailer();//Повертає інфо про трейлер