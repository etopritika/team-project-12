import ApiService from './api-service.js';
import genres from '../data/genres';

const apiService = new ApiService();
const movieTrand = document.querySelector('.movie-card');

movieTrand.addEventListener("click", openModal);
function openModal(e) {
  console.log("Target: ",e.target.nodeName);
  if(e.target.nodeName !== "IMG" && e.target.nodeName !== "H2" && e.target.nodeName !== "P"){
    return;
  }
  console.log(e.target);
}

function getGenreId(genreId) {
  const genre = genres.genres.find(function (genre) {
    return genre.id === genreId;
  });
  if (genre) {
    return genre.name;
  } else {
    return '';
  }
}

// function renderMovies(movies) {
//   movieTrand.innerHTML = movies
//     .map(
//       movie => `
//         <li class="movie-card__item">
//           <a class="movie-card__link" href="https://www.themoviedb.org/movie/${
//             movie.id
//           }">
//             <img class="movie-card__image" src="https://image.tmdb.org/t/p/w500/${
//               movie.poster_path
//             }" alt="${movie.title}" />
//           </a>
//           <h2 class="movie-card__title">
//             <a class="movie-card__link" href="https://www.themoviedb.org/movie/${
//               movie.id
//             }">
//               ${movie.title}
//             </a>
//           </h2>
//           <p class="movie-card__genre">
//           ${movie.genre_ids
//             .map(
//               genre_id =>
//                 `<a href="https://www.themoviedb.org/genre/${genre_id}">${getGenreId(
//                   genre_id
//                 )}</a>`
//             )
//             .join(', ')}
//         </p>
//         <p class="movie-card__release-date">
//           <a class="movie-card__link" href="https://www.themoviedb.org/movie/${
//             movie.id
//           }?language=en-US">
//             ${movie.release_date.split('-')[0]}
//           </a>
//         </p>
//         </li>
//       `
//     )
//     .join('');
// }

function renderMovies(movies) {
  movieTrand.innerHTML = movies
    .map(
      movie => `
        <li class="movie-card__item">
            <img class="movie-card__image" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}" />
            <h2 class="movie-card__title">
              ${movie.title}
            </h2>
            <div class="movie-card__info">
            <p class="movie-card__genre">
            ${movie.genre_ids.map(genre_id =>
                  `<a class="movie-card__link" href="https://www.themoviedb.org/genre/${genre_id}">${getGenreId(genre_id)}</a>`)
              .join(', ')}
          </p>
          <p class="movie-card__release-date">
            <a class="movie-card__link" href="https://www.themoviedb.org/movie/${movie.id}?language=en-US">
            ${movie.release_date.split('-')[0]}
            </a>
          </p>  
            </div>
            
        </li>
      `
    )
    .join('');
}

apiService
  .fetchTrending()
  .then(renderMovies)
  .catch(error => console.log(error));


