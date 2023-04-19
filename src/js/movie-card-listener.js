import ApiService from './api-service.js';
import { onOpenModal } from "./modal.js";
import { appendModalMarkup } from "./modal-card-template.js";
import refs from './refs';

// console.log(modalElement);
const apiService = new ApiService();


//Прослуховувач подій
export default refs.filmContainer.onclick = (e) => {
    let currentCard = e.target.closest("li");
    
    if(currentCard) {
      apiService.movieId = currentCard.getAttribute("data-film-id");
      
      apiService.fetchDetails().then(appendModalMarkup);
      onOpenModal();
    //   console.log(currentCard);
    }
  }