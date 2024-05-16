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
    return;
  }
  galleryEl.innerHTML = '';
  loaderEl.classList.remove('is-hidden');

  fetchPhotosByQuery(searchQuery)
    .then(imagesData => {
      if (imagesData.total === 0) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          timeout: 2000,
          color: 'red',
        });
      }
      galleryEl.innerHTML = createMarkupItem(imagesData.results);
    })

    .catch(error => console.log(error))
    .finally(() => {
      event.target.reset();
      loaderEl.classList.add('is-hidden');
    });
}

searchFormEl.addEventListener('submit', onSearchFormSubmit);
