const poster_path = document.querySelector('.modal-img').getAttribute('src');
const title = document.querySelector('h2');
const vote_average = document.querySelector('.vote');
const vote_count = document.querySelector('.votes');
const popularity = document.querySelector('.popularity');
const original_title = document.querySelector('.original-title');
const genres = document.querySelector('.genges');
const overview = document.querySelector('.overview');
const btnAddToWatched = document.querySelector('.add-watched');
const btnAddToQueue = document.querySelector('.add-queue');

btnAddToWatched.addEventListener('click', addWatchedMovieInLocalStorage);
btnAddToQueue.addEventListener('click', addQueueMovieInLocalStorage);

function addWatchedMovieInLocalStorage() {
  const movieDetails = {
    poster_path,
    title,
    vote_average,
    vote_count,
    popularity,
    original_title,
    genres,
    overview
  }

  localStorage.setItem('watched-movies', JSON.stringify(movieDetails))
}

function addQueueMovieInLocalStorage() {
  const movieDetails = {
    poster_path,
    title,
    vote_average,
    vote_count,
    popularity,
    original_title,
    genres,
    overview
  }

  localStorage.setItem('queue-movies', JSON.stringify(movieDetails))
}



{/*
Модалка - попередній варіант!!!

<div>
  <img src="{poster_path}" alt="{title}" />
</div>
<div>
  <h2 class="title">{title}</h2>
  <ul>
    <li>
      <span></span><span class="vote">{vote_average}</span
      ><span class="votes">{vote_count}</span>
    </li>
    <li><span></span><span class="popularity">{popularity}</span></li>
    <li><span></span><span class="original-title">{original_title}</span></li>
    <li><span></span><span class="genres">{genres}</span></li>
  </ul>
  <h3></h3>
  <p class="overview">{overview}</p>
  <div>
    <button class="add-watched"></button>
    <button class="add-queue"></button>
  </div>
</div> */}
