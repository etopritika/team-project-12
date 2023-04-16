import './js/local-storage';

const watchedBtn = document.querySelector('.watched');
const queueBtn = document.querySelector('.queue');

watchedBtn.addEventListener('click', handleClickWatched);
queueBtn.addEventListener('click', handleClickQueue);
 
function handleClickWatched() {
  getWatched = JSON.parse(localStorage.getItem('watched-movies'));
    console.log(getWatched);
  if (getWatched === null || getWatched == "") {
      
      //повідомлення, що немає фільмів watched
  }
  else {
    renderMovies(getWatched);
  }
}


function handleClickQueue() {
  
    getQueue = JSON.parse(localStorage.getItem('queue-movies'));
  console.log(getWatched);
    if (getQueue === null || getQueue == "") {
        //повідомлення, що немає фільмів queue
    }
       
  else {renderMovies(getQueue);
    }
}
function renderMovies(movies) {
  const markup = movies
    .map(
      movie => `
        <li class="movie-card__item" data-film-id="${movie.id}">
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


