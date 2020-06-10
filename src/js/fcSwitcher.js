/* eslint-disable no-param-reassign */
import { FC_BUTTONS, forecastTemperature } from './variables.js';

let isCelsius = true;
const temperatureList = [];

export default function fcSwitcher() {
  FC_BUTTONS.forEach((el) => {
    el.classList.toggle('active');
  });

  forecastTemperature.forEach((el) => {
    temperatureList.push(el.textContent);
  });

  if (isCelsius) {
    calculateFahrenheitTemp();
  } else {
    returnCelsiusTemp();
  }
}

function calculateFahrenheitTemp() {
  const array = temperatureList.map((el) => ((el !== '?') ? Math.round(el * (9 / 5) + 32) : '?'));
  forecastTemperature.forEach((el, day) => {
    el.innerText = array[day];
  });
  isCelsius = false;
}

function returnCelsiusTemp() {
  forecastTemperature.forEach((el, day) => {
    el.innerText = temperatureList[day];
  });
  isCelsius = true;
}
