export function addWatchedMovieInLocalStorage() {
  const modal = document.querySelector('.modal');

  const poster_path = document.querySelector('.modal-img').getAttribute('src');
  const vote_average = document.querySelector('.vote_average').textContent;
  const vote_count = document.querySelector('.vote_count').textContent;
  const popularity = document.querySelector('.popularity').textContent;
  const original_title = document.querySelector('.original-title').textContent;
  // const genres = document.querySelector('.genges').textContent;
  const overview = document.querySelector('.overview').textContent;
  const title = document.querySelector('.title').textContent;

  const movieDetails = {
    poster_path,
    title,
    vote_average,
    vote_count,
    popularity,
    original_title,
    // genres, 
    overview
  }

  let savedMovies = [];
  if (localStorage.getItem('watched-movies')) {
    savedMovies = JSON.parse(localStorage.getItem('watched-movies'))
  }
  
  const isSaved = savedMovies.some(savedMovie => {
    return savedMovie.overview === overview;
  })
  
  if (!isSaved) {
    savedMovies.push(movieDetails);
    localStorage.setItem('watched-movies', JSON.stringify(savedMovies));
  }
}

export function addQueueMovieInLocalStorage() {
  const modal = document.querySelector('.modal');

  const poster_path = document.querySelector('.modal-img').getAttribute('src');
  const vote_average = document.querySelector('.vote_average').textContent;
  const vote_count = document.querySelector('.vote_count').textContent;
  const popularity = document.querySelector('.popularity').textContent;
  const original_title = document.querySelector('.original-title').textContent;
  // const genres = document.querySelector('.genges').textContent;
  const overview = document.querySelector('.overview').textContent;
  const title = document.querySelector('.title').textContent;

  const movieDetails = {
    poster_path,
    title,
    vote_average,
    vote_count,
    popularity,
    original_title,
    // genres, 
    overview
  }

  let savedMovies = [];
  if (localStorage.getItem('queue-movies')) {
    savedMovies = JSON.parse(localStorage.getItem('queue-movies'))
  }
  
  const isSaved = savedMovies.some(savedMovie => {
    return savedMovie.overview === overview;
  })
  
  if (!isSaved) {
    savedMovies.push(movieDetails);
    localStorage.setItem('queue-movies', JSON.stringify(savedMovies));
  }
}