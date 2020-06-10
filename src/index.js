/* eslint-disable no-unused-vars */
/* eslint-disable no-multiple-empty-lines */

import './scss/main.scss';
import Background from './img/header/refresh-bg.png';
import Refresh from './img/header/refresh.svg';

import { PRELOADER, FC_BUTTONS } from './js/variables.js';
import { getForecast, setPageTitle } from './js/forecast.js';
import loadBackgroundImage from './js/loadBGimage.js';
import showCoordinates from './js/showCoordinates.js';
import fcSwitcher from './js/fcSwitcher.js';

const searchInput = document.querySelector('#city');
const searchButton = document.querySelector('#search');

let mapCoordinates = [];

window.onload = function () {
  getGeolocation();
  PRELOADER.classList.add('hide');
};

function getGeolocation() {
  const GEOLOCATION_TOKEN = '80118c9e4141b6';
  const GEOLOCATION_URL = `https://ipinfo.io/json?token=${GEOLOCATION_TOKEN}`;
  fetch(GEOLOCATION_URL)
    .then((response) => response.json())
    .then((data) => {
      loadBackgroundImage();
      getForecast(data.city);
      showCoordinates(data.loc);
      setMapCoordinates(data.loc);
      setTimeout(init, 1500);
    });
}

function setMapCoordinates(coordinates) {
  mapCoordinates = coordinates.split(',');
}

function getGeoObjectFromInput() {
  const YANDEX_TOKEN = 'b456edb6-d61e-42d8-b468-f0c7e0c63be9';
  const GEOCODUNG_URL = `https://geocode-maps.yandex.ru/1.x/?apikey=${YANDEX_TOKEN}&format=json&geocode=${searchInput.value}`;
  fetch(GEOCODUNG_URL)
    .then((response) => response.json())
    .then((data) => {
      mapCoordinates = data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ').reverse();
      const city = data.response.GeoObjectCollection.featureMember[0].GeoObject.name;
      const country = data.response.GeoObjectCollection.featureMember[0].GeoObject.description;
      loadBackgroundImage(city);
      setPageTitle(city, country);
      showCoordinates(mapCoordinates);
      getForecast(city);

      document.querySelector('.map__image').innerHTML = '';
      init();
    })
    .catch(() => alert(`Вы ввели: ${searchInput.value}\nТакой адрес не существует`));
}


searchInput.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    getGeoObjectFromInput();
  }
});

searchButton.addEventListener('click', () => {
  getGeoObjectFromInput();
});

FC_BUTTONS.forEach((el) => {
  el.addEventListener('click', fcSwitcher);
});

//= ============ set map ===============
let myMap;
// ymaps.ready(init);
function init() {
  myMap = new ymaps.Map('map', {
    center: mapCoordinates,
    zoom: 10,
  }, {
    searchControlProvider: 'yandex#search',
  });
}
//= ============ set map ===============
