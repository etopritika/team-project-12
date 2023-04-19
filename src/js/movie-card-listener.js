import ApiService from './api-service.js';
import { onOpenModal } from "./modal.js";
import { appendModalMarkup } from "./template/modal-card-template.js";
import refs from './refs/refs.js';


const apiService = new ApiService();


//Прослуховувач подій
export default refs.filmContainer.onclick = (e) => {
    let currentCard = e.target.closest("li");
    
    if(currentCard) {
      apiService.movieId = currentCard.getAttribute("data-film-id");
      
      apiService.fetchDetails().then(appendModalMarkup);
      onOpenModal();
   
    }
  }