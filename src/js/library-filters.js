// кнопки бібліотеки
const watchedButton = document.querySelector('.watched_button');
const queueButton = document.querySelector('.queue_button');

// фільтрування списку бібліотеки по кнопкам 
watchedButton.addEventListener('click', watchedFilmsFilter);
queueButton.addEventListener('click', queueFilmsFilter);


// фільми які вже переглянуті
function watchedFilmsFilter(event) {
    event.preventDefault();
    watchedButton.classList.add('is_active')
    queueButton.classList.remove('is_active')
};

// фільми в черзі queue
function queueFilmsFilter(event) {
    event.preventDefault();
    queueButton.classList.add('is_active')
    watchedButton.classList.remove('is_active')
};