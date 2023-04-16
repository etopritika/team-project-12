import  Pagination  from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css'; 
// добавлю пока такі стилі які є з пагінацією а коли уже буде видно шо як буду добавляти scss
import {fetchTrending} from './api-service';
import {renderMovies} from './render-trandFilms';
// отримання поточної сторінки


function getCurrentPage(){
 
  const currentPage=document.querySelector('.site-nav__link--сurrent')
  // site-nav__link--current це поточна сторінка привязана до кнопки хоме
  if (currentPage.textContent==='home'){
    return 'home'
  }
  else{
    return 'library';
  }
}

const container=document.getElementById('tui-pagination-container');

const pagination= new Pagination(container, {
    totalItems:10,
    itemsPerPage:20,
    visiblePages:5,
    page:1,
    centrAlign:true,
});

const page=pagination.getCurrentPage();

export function fetch(){
    fetchTrending(page).then(data=>{
        pagination.reset(data.results);
        renderMovies(data)
    });
}

fetch();

export function paginationOn(){
    pagination.on('afterMove', event=>{
      const currentPage=event.page;
      fetchTrending(currentPage).then(data=>{
        renderMovies(data);
      });
    });
    
}

paginationOn();

export{pagination};