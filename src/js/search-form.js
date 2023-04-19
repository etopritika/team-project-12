import ApiService from './api-service';
import genres from '../data/genres';
import refs from './refs';
import renderMovies from "./card-film-template";
const apiService = new ApiService();




refs.form.addEventListener('submit', onSearch);

export function onSearch(e) {
  e.preventDefault();
  apiService.query = e.currentTarget.elements.query.value;
  refs.loader.classList.remove('loader-hidden'); // показати спінер
  fetchSearchMovies();
  hidePagination();
  // const clearPagination = document.querySelector(".tui-pagination");
  // clearPagination.style.display = "none";
}

function fetchSearchMovies() {
  apiService.fetchArticles().then(renderMovies)//Повертає масив пошуку фільму
        .finally(() => {
      refs.loader.classList.add('loader-hidden'); // приховати спінер
    });
}

function hidePagination() {
  document.getElementById('tui-pagination-container').hidden=true;
  document.querySelector(".movie-cards-wrapper").style.marginBottom = "32px";
}


// function getGenreId(genreId) {
//   const genre = genres.genres.find(function (genre) {
//     return genre.id === genreId;
//   });
//   if (genre) {
//     return genre.name;
//   } else {
//     return '';
//   }
// }

// function renderMovies(movies) {
//   try {
//     refs.movieTrand.innerHTML = movies
//     .map(
//       movie => `
//         <li class="movie-card__item" data-film-id="${movie.id}">
//             <img class="movie-card__image" src="https://image.tmdb.org/t/p/w500/${
//               movie.poster_path
//             }" alt="${movie.title}" />
//             <h2 class="movie-card__title">
//               ${movie.title}
//             </h2>
//             <div class="movie-card__info">
//             <p class="movie-card__genre">
//             ${movie.genre_ids
//               .map(
//                 genre_id =>
//                   `<a class="movie-card__link" href="https://www.themoviedb.org/genre/${genre_id}">${getGenreId(
//                     genre_id
//                   )}</a>`
//               )
//               .join(', ')}
//           </p>
//           <p class="movie-card__release-date">
//             <a class="movie-card__link" href="https://www.themoviedb.org/movie/${
//               movie.id
//             }?language=en-US">
//             ${movie.release_date.split('-')[0]}
//             </a>
//           </p>  
//             </div>
            
//         </li>
//       `
//     )
//     .join('');
//   } catch (error) {
    
//   }
// }