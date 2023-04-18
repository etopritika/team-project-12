const movieTrand = document.querySelector('.movie-cards');

function renderWatchedMovies() {
  const parsedLocalStorageData = JSON.parse(localStorage.getItem('watched-movies'));
  const movieContainer = document.querySelector('.movie-cards');
  movieContainer.innerHTML = '';

  if (parsedLocalStorageData === `` || parsedLocalStorageData === null) {
    // const markup = `<li class="img-library"><span class="text-library">Please select a movie on the main page</span></li>`;
    // ul.innerHTML = markup;
    console.log("У вас ще немає фільмів які ви дивились")
  }
  else {
    renderMovie(parsedLocalStorageData);
    // console.log(parsedLocalStorageData);
    //     parsedLocalStorageData.forEach(obj => {
    //       console.log(obj);
    //   const movie = renderMovie(obj);
    //   movieContainer.appendChild(movie);
    // });
  }
}
function renderQueueMovies() {
  const parsedLocalStorageData = JSON.parse(localStorage.getItem('queue-movies'));
  const movieContainer = document.querySelector('.movie-cards');
  movieContainer.innerHTML = '';

  if (parsedLocalStorageData === ``  || parsedLocalStorageData === null) {
    console.log("Ви не хочете дивитись ніякі фільми")
  }
  else {
    renderMovie(parsedLocalStorageData);
    // console.log(parsedLocalStorageData);
    // parsedLocalStorageData.forEach(obj => {
    //   const movie = renderMovie(obj);
    //   movieContainer.appendChild(movie);
    // });
  }
}

function renderMovie(movies) {
  // console.log(movies);
 movieTrand.innerHTML = movies
    .map(
      movie => `
        <li class="movie-card__item" data-film-id="${movie.id}">
            <img class="movie-card__image" src="https://image.tmdb.org/t/p/w500/${
              movie.poster_path
            }" alt="${movie.title}" />
            <h2 class="movie-card__title">
              ${movie.title}
            </h2>
            <div class="movie-card__info">
            <p class="movie-card__genre">
              ${movie.genres.map(genre => genre)}
          </p>
          <p class="movie-card__release-date">
            <a class="movie-card__link" href="https://www.themoviedb.org/movie/${
              movie.id
            }?language=en-US">
            ${movie.release_date.split('-')[0]}
            </a>
          </p>  
            </div>
            
        </li>
      `
    )
    .join('');
}
const btnTest1 = document.querySelector('.btn-watched');
btnTest1.addEventListener('click', renderWatchedMovies);

const btnTest2 = document.querySelector('.btn-queue');
btnTest2.addEventListener('click', renderQueueMovies);

{/* <a class="movie-card__link" href="https://www.themoviedb.org/genre/${genre_id}">${getGenreId(genre_id)}</a> */}