import ApiService from './api-service.js';
import {onOpenModal, appendModalMarkup} from "./modal.js";
import refs from './refs';

// console.log(modalElement);
const apiService = new ApiService();


//Прослуховувач подій
export default refs.filmContainer.onclick = (e) => {
    let currentCard = e.target.closest("li");
    
    if(currentCard) {
      apiService.movieId = currentCard.getAttribute("data-film-id");
      onOpenModal();
      apiService.fetchDetails().then(appendModalMarkup);
    //   console.log(currentCard);
    }
  }