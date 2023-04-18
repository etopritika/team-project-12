export function addWatchedMovieInLocalStorage() {
  const modal = document.querySelector('.modal');

  const id = document.querySelector('.modal-card').getAttribute('data-film-id');
  const poster_path = document.querySelector('.modal-img').getAttribute('src');
  const release_date = document.querySelector('.modal-info').getAttribute('data-release-date');
  const vote_average = document.querySelector('.modal-vote_average').textContent;
  const vote_count = document.querySelector('.modal-vote_count').textContent;
  const popularity = document.querySelector('.modal-popularity').textContent;
  const original_title = document.querySelector('.modal-original-title').textContent;
  let genres = document.querySelectorAll('.genres');
  const overview = document.querySelector('.modal-overview').textContent;
  const title = document.querySelector('.modal-title').textContent;
  let genresArr = [];

  for (let i = 0; i < genres.length; i+=1) {
    genresArr.push(genres[i].textContent);
  }

  const movieDetails = {
    id,
    release_date,
    poster_path,
    title,
    vote_average,
    vote_count,
    popularity,
    original_title,
    genres: genresArr, 
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

  const id = document.querySelector('.modal-card').getAttribute('data-film-id');
  const poster_path = document.querySelector('.modal-img').getAttribute('src');
  const release_date = document.querySelector('.modal-info').getAttribute('data-release-date');
  const vote_average = document.querySelector('.modal-vote_average').textContent;
  const vote_count = document.querySelector('.modal-vote_count').textContent;
  const popularity = document.querySelector('.modal-popularity').textContent;
  const original_title = document.querySelector('.modal-original-title').textContent;
  let genres = document.querySelectorAll('.genres');
  const overview = document.querySelector('.modal-overview').textContent;
  const title = document.querySelector('.modal-title').textContent;
  let genresArr = [];
  
  for (let i = 0; i < genres.length; i+=1) {
    genresArr.push(genres[i].textContent);
  }

  const movieDetails = {
    id,
    release_date,
    poster_path,
    title,
    vote_average,
    vote_count,
    popularity,
    original_title,
    genres: genresArr, 
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