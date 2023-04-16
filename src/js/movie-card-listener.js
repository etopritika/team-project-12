import ApiService from './api-service.js';
import {onOpenModal, appendModalMarkup} from "./modal.js";


// console.log(modalElement);
const apiService = new ApiService();
const filmContainer = document.querySelector('.movie-cards');

//Прослуховувач подій
export default filmContainer.onclick = (e) => {
    let currentCard = e.target.closest("li");
    
    if(currentCard) {
      apiService.movieId = currentCard.getAttribute("data-film-id");
      onOpenModal();
      apiService.fetchDetails().then(appendModalMarkup);
      console.log(currentCard);
    }
  }