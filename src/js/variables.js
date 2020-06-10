const PRELOADER = document.querySelector('.preloader');
const REFRESH_BUTTON = document.querySelector('.settings-block__refresh');
const REFRESH_ARRAYS = document.querySelector('#refresh-arrays');
const FC_BUTTONS = document.querySelectorAll('.settings-block__fc_item');
const CELSIUS_BUTTON = document.querySelector('#celsius');
const FAHRENHEIT_BUTTON = document.querySelector('#fahrenheit');

const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const forecastTemperature = document.querySelectorAll('.forecast-temperature');
const forecastWeekday = document.querySelectorAll('.forecast-title');
const forecastImage = document.querySelectorAll('.forecast-image');
const forecastDay = document.querySelector('#forecast-day');
const forecastMonth = document.querySelector('#forecast-month');
const forecastTime = document.querySelector('#forecast-time');

const titleCity = document.querySelector('.title__city');

export {
  PRELOADER, REFRESH_BUTTON, REFRESH_ARRAYS, WEEKDAYS, MONTHS, forecastTemperature,
  forecastWeekday, forecastImage, forecastDay, forecastMonth, forecastTime, titleCity,
  FC_BUTTONS, CELSIUS_BUTTON, FAHRENHEIT_BUTTON,
};
