import ApiService from './api-service.js';
import genres from '../data/genres';

const apiService = new ApiService();
const movieTrand = document.querySelector('.movie-cards');
let movieParent = document.querySelector(".movie-cards");

//Прослуховувач подій
movieParent.onclick = (e) => {
  let currentCard = e.target.closest("li");
  if(currentCard) {
     console.log("Click");
     //Open modal here
  }
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


