import { createMarkupItem } from './js/render-functions.js';
import { fetchPhotosByQuery } from './js/pixabay-api.js';

const galleryEl = document.querySelector('.js-gallery');
const searchFormEl = document.querySelector('.js-search-form');
const loaderEl = document.querySelector('.js-loader');

fetchPhotosByQuery()
  .then(imagesData => {
    galleryEl.innerHTML = createMarkupItem(imagesData.hits);
  })
  .catch(error => console.log(error));
