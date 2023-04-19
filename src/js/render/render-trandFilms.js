import ApiService from '../api-service.js';
import renderMovies from '../template/card-film-template.js';
const apiService = new ApiService();

apiService
  .fetchTrending()
  .then(response => response.results)
  .then(renderMovies)
  .catch(error => console.log(error));

window.addEventListener('load', () => {
  const loader = document.querySelector('.loader');

  loader.classList.add('loader-hidden');

  loader.addEventListener('transitionend', () => {
    
  });
});
