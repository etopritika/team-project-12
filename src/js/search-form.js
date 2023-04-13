import ApiService from './api-service';
const apiService = new ApiService();

const form = document.querySelector('#search-form');
form.addEventListener('submit', onSearch);



function onSearch(e) {
  e.preventDefault();
  apiService.query = e.currentTarget.elements.query.value;
  apiService.fetchArticles().then(response => console.log(response));//Повертає масив пошуку фільму
}

//https://image.tmdb.org/t/p/w500{посилання на картинку}

// apiService.fetchTrending();//Повертає масив популярних фільмів
// apiService.fetchDetails();//Повертає повну інформацію про фільм, потрібен id фільму
// apiService.fetchTrailer();//Повертає інфо про трейлер