export default function showCoordinates(coordinates) {
  const latitude = document.querySelector('.geo-coordinates__latitude');
  const longitude = document.querySelector('.geo-coordinates__longitude');

  if (typeof coordinates === 'string') {
    latitude.innerHTML = `latitude: ${coordinates.split(',')[0].slice(0, 5)}'`.replace(/\./, '°');
    longitude.innerHTML = `longitude: ${coordinates.split(',')[1].slice(0, 5)}'`.replace(/\./, '°');
  } else {
    latitude.innerHTML = `latitude: ${coordinates[0].slice(0, 5)}'`.replace(/\./, '°');
    longitude.innerHTML = `longitude: ${coordinates[1].slice(0, 5)}'`.replace(/\./, '°');
  }
}
