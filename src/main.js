import { createMarkupItem } from './js/render-functions.js';
import { fetchPhotosByQuery } from './js/pixabay-api.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const galleryEl = document.querySelector('.js-gallery');
const searchFormEl = document.querySelector('.js-search-form');
const loaderEl = document.querySelector('.js-loader');

function onSearchFormSubmit(event) {
  event.preventDefault();

  const searchQuery = event.target.elements.searchKeyword.value.trim();
  if (searchQuery === '') {
    galleryEl.innerHTML = '';
    event.target.reset();
    iziToast.error({
      title: 'Error',
      message: 'Illegal operation',
      position: 'topRight',
      timeout: 2000,
    });
  }
}

galleryEl.innerHTML = '';

fetchPhotosByQuery(searchQuery)
  .then(imagesData => {
    galleryEl.innerHTML = createMarkupItem(imagesData.results);
    console.log(imagesData);
  })
  .catch(error => console.log(error));

searchFormEl.addEventListener('submit', onSearchFormSubmit);
