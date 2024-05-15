import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43896740-362a21d10e9d41ec216c05f15';

export const fetchPhotosByQuery = query => {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}?${searchParams}`).then(response => {
    if (!response.ok) {
      iziToast.error({
        title: 'Sorry',
        message:
          'there are no images matching your search query. Please try again!',
      });
    }
    return response.json();
  });
};
