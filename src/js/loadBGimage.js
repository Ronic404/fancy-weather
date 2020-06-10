import { PRELOADER, REFRESH_BUTTON, REFRESH_ARRAYS } from './variables.js';

export default function loadBackgroundImage() {
  PRELOADER.classList.remove('hide');
  const IMAGES_TOKEN = 'XiF9NKaCcFIZNpZZAZkN_wQJt-P8QNDzy4XgwpEED8o';
  const IMAGES_URL = `https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=nature&client_id=${IMAGES_TOKEN}`;

  fetch(IMAGES_URL)
    .then((response) => response.json())
    .then((data) => {
      document.body.style.backgroundImage = `url(${data.urls.full})`;
      PRELOADER.classList.add('hide');
    })
    .catch(() => {
      document.body.style.backgroundImage = 'url("https://www.positronx.io/wp-content/uploads/2019/04/bandwidth-limit-exceeded-3807-01.jpg")';
      PRELOADER.classList.add('hide');
      window.console.warn('Превышено число попыток запроса картинок');
    });
}

let refreshSpin = 0;

REFRESH_BUTTON.addEventListener('click', () => {
  loadBackgroundImage();
  refreshSpin += 90;
  REFRESH_ARRAYS.style.transform = `rotate(${refreshSpin}deg)`;
});
