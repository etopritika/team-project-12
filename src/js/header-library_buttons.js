import refs from './refs';
import ApiService from './api-service.js';
import renderMovies from './render-trandFilms';

const apiService = new ApiService();

// відкриття бібліотеки
refs.libraryButton.addEventListener('click', clickLibraryButton);
refs.libraryButton.onclick=function(){
  document.getElementById('tui-pagination-container').hidden=true;
  document.querySelector(".movie-cards-wrapper").style.marginBottom = "32px";
}
refs.buttomLibW.addEventListener('click', clickLibAdd);
refs.buttomLibQ.addEventListener('click', clickLibRem);

// вікриття головної сторінки
refs.homeButton.addEventListener('click', showMainPage);
refs.homeButton.onclick=function(){
  document.getElementById('tui-pagination-container').hidden=false;
  document.querySelector(".movie-cards-wrapper").style.marginBottom = "0px";
}

// logoArea.addEventListener('click', showMainPage);
function clickLibAdd() {
  refs.buttomLibW.classList.add('lbr-active');
  refs.buttomLibQ.classList.remove('lbr-active');
}
function clickLibRem() {
  refs.buttomLibQ.classList.add('lbr-active');
  refs.buttomLibW.classList.remove('lbr-active');
}

// функція для відкриття бібліотеки
function clickLibraryButton() {
  // для зміни кольору фону
  refs.libraryButton.classList.add('is_active');
  refs.homeButton.classList.remove('is_active');
  // для появи кнопок на екрані
  refs.divLibraryButtons.classList.remove('is_hiden');
  // приховання форми
  refs.form.classList.add('is_hidden');
  refs.buttomLibrary.classList.add('is_activity');
  refs.headerOrange.classList.add('header-orange');
}

// фунція для яповернення розмітки на головній сторінці
function showMainPage() {
  // для зміни кольору фону
  refs.libraryButton.classList.remove('is_active');
  refs.homeButton.classList.add('is_active');
  // для приховання кнопок бібліотеки на екрані
  refs.divLibraryButtons.classList.add('is_hiden');
  // поява форми
  refs.form.classList.remove('is_hiden');
  refs.buttomLibrary.classList.remove('is_activity');
  refs.form.classList.remove('is_hidden');
  refs.headerOrange.classList.remove('header-orange');
}

refs.homeButton.addEventListener('click', () => {
  apiService
    .fetchTrending()
    .then(response => response.results)
    .then(movies => {
      renderMovies(movies);
    })
    .catch(error => console.log(error));
});
