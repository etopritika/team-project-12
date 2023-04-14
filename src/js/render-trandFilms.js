import ApiService from './api-service.js';
import genres from '../data/genres';

const apiService = new ApiService();
const movieTrand = document.querySelector('.movie-card');

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
          <a class="movie-card__link" href="https://www.themoviedb.org/movie/${
            movie.id
          }">
            <img class="movie-card__image" src="https://image.tmdb.org/t/p/w500/${
              movie.poster_path
            }" alt="${movie.title}" />
          </a>
          <div class="movie-card__title">
            <a class="movie-card__link" href="https://www.themoviedb.org/movie/${
              movie.id
            }">
              ${movie.title}
            </a>
          </div>
          <div class="movie-card__genre">
          ${movie.genre_ids
            .map(
              genre_id =>
                `<a href="https://www.themoviedb.org/genre/${genre_id}">${getGenreId(
                  genre_id
                )}</a>`
            )
            .join(', ')}
        </div>
        <div class="movie-card__release-date">
          <a class="movie-card__link" href="https://www.themoviedb.org/movie/${
            movie.id
          }?language=en-US">
            ${movie.release_date.split('-')[0]}
          </a>
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
