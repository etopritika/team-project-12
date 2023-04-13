// import ApiService from './api-service.js';
// import genres from '../data/genres';

// const apiService = new ApiService();
// const movieTrand = document.querySelector('.trand-films');

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
//   movieTrand.innerHTML = movies
//     .map(
//       movie => `
//       <div class="movie">
//         <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${
//         movie.title
//       }" />
//         <div class="title">${movie.title}</div>
//         <div class="genre">${movie.genre_ids.map(getGenreId).join(', ')}</div>
//         <div class="release-date">${movie.release_date}</div>
//       </div>
//     `
//     )
//     .join('');
// }

// apiService
//   .fetchTrending()
//   .then(renderMovies)
//   .catch(error => console.log(error));
