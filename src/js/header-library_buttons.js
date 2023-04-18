import ApiService from './api-service.js';
import renderMovies from './render-trandFilms';

const apiService = new ApiService();
const movieTrand = document.querySelector('.movie-cards');

// кнопки основної сторінки
const libraryButton = document.querySelector('.library_button');
const homeButton = document.querySelector('.home_button');
// const logoArea = document.querySelector('.logo');
const form = document.querySelector('.search-form');
const headerOrange = document.querySelector('.header');

// ДОБАВИЛ НА КНОПУ ПОЯВЛЕНИЕ КНОПОК БИБЛИОТЕКИ
const buttomLibrary = document.querySelector('.headermenu__buttons');
const buttomLibW = document.querySelector('.btnW');
const buttomLibQ = document.querySelector('.btnQ');

// блок з кнопками бібліотеки
const divLibraryButtons = document.querySelector('.library__buttons');

// відкриття бібліотеки
libraryButton.addEventListener('click', clickLibraryButton);
libraryButton.onclick=function(){
  document.getElementById('tui-pagination-container').hidden=true
}
buttomLibW.addEventListener('click', clickLibAdd);
buttomLibQ.addEventListener('click', clickLibRem);

// вікриття головної сторінки
homeButton.addEventListener('click', showMainPage);
homeButton.onclick=function(){
  document.getElementById('tui-pagination-container').hidden=false
}

// logoArea.addEventListener('click', showMainPage);
function clickLibAdd() {
  buttomLibW.classList.add('lbr-active');
  buttomLibQ.classList.remove('lbr-active');
}
function clickLibRem() {
  buttomLibQ.classList.add('lbr-active');
  buttomLibW.classList.remove('lbr-active');
}

// функція для відкриття бібліотеки
function clickLibraryButton() {
  // для зміни кольору фону
  libraryButton.classList.add('is_active');
  homeButton.classList.remove('is_active');
  // для появи кнопок на екрані
  divLibraryButtons.classList.remove('is_hiden');
  // приховання форми
  form.classList.add('is_hidden');
  buttomLibrary.classList.add('is_activity');
  headerOrange.classList.add('header-orange');
}

// фунція для яповернення розмітки на головній сторінці
function showMainPage() {
  // для зміни кольору фону
  libraryButton.classList.remove('is_active');
  homeButton.classList.add('is_active');
  // для приховання кнопок бібліотеки на екрані
  divLibraryButtons.classList.add('is_hiden');
  // поява форми
  form.classList.remove('is_hiden');
  buttomLibrary.classList.remove('is_activity');
  form.classList.remove('is_hidden');
  headerOrange.classList.remove('header-orange');
}

homeButton.addEventListener('click', () => {
  apiService
    .fetchTrending()
    .then(response => response.results)
    .then(movies => {
      renderMovies(movies);
    })
    .catch(error => console.log(error));
});
