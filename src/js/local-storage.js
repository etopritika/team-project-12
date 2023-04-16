//===========================первый вариант с взятием данных модалки======================
// const poster_path = document.querySelector('.modal-img').getAttribute('src');
// const title = document.querySelector('h2').textContent;
// const vote_average = document.querySelector('.vote').textContent;
// const vote_count = document.querySelector('.votes').textContent;
// const popularity = document.querySelector('.popularity').textContent;
// const original_title = document.querySelector('.original-title').textContent;
// const genres = document.querySelector('.genges').textContent;
// const overview = document.querySelector('.overview').textContent;

// const btnAddToWatched = document.querySelector('.add-watched');
// const btnAddToQueue = document.querySelector('.add-queue');

// btnAddToWatched.addEventListener('click', addWatchedMovieInLocalStorage);
// btnAddToQueue.addEventListener('click', addQueueMovieInLocalStorage);

// function addWatchedMovieInLocalStorage() {
//   const movieDetails = {
//     poster_path,
//     title,
//     vote_average,
//     vote_count,
//     popularity,
//     original_title,
//     genres,
//     overview
//   }

//   localStorage.setItem('watched-movies', JSON.stringify(movieDetails))
// }

// function addQueueMovieInLocalStorage() {
//   const movieDetails = {
//     poster_path,
//     title,
//     vote_average,
//     vote_count,
//     popularity,
//     original_title,
//     genres,
//     overview
//   }

//   localStorage.setItem('queue-movies', JSON.stringify(movieDetails))
// }
//===========================================================================================


// import ApiService from './api-service';

// const btnAddToWatched = document.querySelector('.add-watched');
// const btnAddToQueue = document.querySelector('.add-queue');
// const movieId = document.querySelector('div').dataset.id;  //если ID карточки записано в эл-те div с data-id
// const apiService = new ApiService();



// btnAddToWatched.addEventListener('click', addWatchedMovieInLocalStorage);
// btnAddToQueue.addEventListener('click', addQueueMovieInLocalStorage);


//=========================работающий вариант, чтоб записать одну карточку(объект)!!!!======================================
// const btnLocalStorage = document.querySelector('.test-ls');
// const btnLocalStorage2 = document.querySelector('.test-ls2');

// btnLocalStorage.addEventListener('click', addWatchedMovieInLocalStorage)
// btnLocalStorage2.addEventListener('click', addQueueMovieInLocalStorage)

// function addWatchedMovieInLocalStorage() {
//     return fetch(`
//     https://api.themoviedb.org/3/movie/19995?api_key=604d147cd55c0bcd03b68a72549a64de&language=en-US`)
//     .then(response => response.json())
//     .then(movieDetails => localStorage.setItem('watched-movies', JSON.stringify(movieDetails)));
//   }
  
// function addQueueMovieInLocalStorage() {
//     return fetch(`
//     https://api.themoviedb.org/3/movie/19995?api_key=604d147cd55c0bcd03b68a72549a64de&language=en-US`)
//     .then(response => response.json())
//     .then(movieDetails => localStorage.setItem('queue-movies', JSON.stringify(movieDetails)));
// }  
//===========================================================================================================================


//============================== запись в локал сторидж массив объектов======================================================
// const btnLocalStorage = document.querySelector('.test-ls');
// const btnLocalStorage2 = document.querySelector('.test-ls2');

// btnLocalStorage.addEventListener('click', addWatchedMovieInLocalStorage);
// btnLocalStorage2.addEventListener('click', addQueueMovieInLocalStorage);

function addWatchedMovieInLocalStorage() {
  fetch(`
     https://api.themoviedb.org/3/movie/19995?api_key=604d147cd55c0bcd03b68a72549a64de&language=en-US`)
    .then(response => response.json())
    .then(movieDetails => {
      const moviesJSON = localStorage.getItem('watched-movies');
      const savedMovies = JSON.parse(moviesJSON) || [];

      savedMovies.push(movieDetails);

      localStorage.setItem('watched-movies', JSON.stringify(savedMovies));
    });
}

function addQueueMovieInLocalStorage() {
  fetch(`
     https://api.themoviedb.org/3/movie/19995?api_key=604d147cd55c0bcd03b68a72549a64de&language=en-US`)
    .then(response => response.json())
    .then(movieDetails => {
      const moviesJSON = localStorage.getItem('queue-movies');
      const savedMovies = JSON.parse(moviesJSON) || [];

      savedMovies.push(movieDetails);

      localStorage.setItem('queue-movies', JSON.stringify(savedMovies));
    });
}

// ======================Модалка - данные для первого варианта==========================
// <div>
//   <img src="{poster_path}" alt="{title}" />
// </div>
// <div>
//   <h2 class="title">{title}</h2>
//   <ul>
//     <li>
//       <span></span><span class="vote">{vote_average}</span
//       ><span class="votes">{vote_count}</span>
//     </li>
//     <li><span></span><span class="popularity">{popularity}</span></li>
//     <li><span></span><span class="original-title">{original_title}</span></li>
//     <li><span></span><span class="genres">{genres}</span></li>
//   </ul>
//   <h3></h3>
//   <p class="overview">{overview}</p>
//   <div>
//     <button class="add-watched"></button>
//     <button class="add-queue"></button>
//   </div>
// </div> 
//=======================================================================================