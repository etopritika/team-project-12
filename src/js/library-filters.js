import refs from './refs/refs';
// кнопки бібліотеки


// фільтрування списку бібліотеки по кнопкам 
refs.watchedButton.addEventListener('click', watchedFilmsFilter);
refs.queueButton.addEventListener('click', queueFilmsFilter);


// фільми які вже переглянуті
function watchedFilmsFilter(event) {
    event.preventDefault();
    refs.watchedButton.classList.add('is_active')
    refs.queueButton.classList.remove('is_active')
};

// фільми в черзі queue
function queueFilmsFilter(event) {
    event.preventDefault();
    refs.queueButton.classList.add('is_active')
    refs.watchedButton.classList.remove('is_active')
};