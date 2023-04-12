import ApiService from './api-service';
const apiService = new ApiService();

const form = document.querySelector('#search-form');
form.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
  apiService.query = e.currentTarget.elements.query.value;
  apiService.fetchArticles().then(response => console.log(response));//Повертає масив пошуку фільму
}


apiService.fetchPopular();//Повертає масив популярних фільмів