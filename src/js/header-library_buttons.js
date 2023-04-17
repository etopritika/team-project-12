// кнопки основної сторінки
const libraryButton = document.querySelector('.library_button');
const homeButton = document.querySelector('.home_button');
const logoArea = document.querySelector('.logo')
const form = document.querySelector('.search-form');

// блок з кнопками бібліотеки
const divLibraryButtons = document.querySelector('.library__buttons')

// відкриття бібліотеки
libraryButton.addEventListener('click', clickLibraryButton);

// вікриття головної сторінки
// homeButton.addEventListener('click', showMainPage);
// logoArea.addEventListener('click', showMainPage);

// функція для відкриття бібліотеки
function clickLibraryButton(event) {
    // для зміни кольору фону
    libraryButton.classList.add('is_active');
    homeButton.classList.remove('is_active');
    // для появи кнопок на екрані
    divLibraryButtons.classList.remove('is_hiden');
    // приховання форми
    form.classList.add('is_hiden')
};

// фунція для яповернення розмітки на головній сторінці
function showMainPage(event) {
    // для зміни кольору фону
    libraryButton.classList.remove('is_active');
    homeButton.classList.add('is_active');  
    // для приховання кнопок бібліотеки на екрані
    divLibraryButtons.classList.add('is_hiden');
    // поява форми
    form.classList.remove('is_hiden')    
};
