'use strict';
function getDogImage() {
  fetch('https://dog.ceo/api/breeds/image/chihuahuas')
    .then((response) => response.json())
    .then((data) => console.log(data) {
      const img = document.querySelector('img');
      img.src = data.message;
      img.alt = 'Un perro';
    });
}
const btn = document.querySelector('.js-dog');
btn.addEventListener('click', getDogImage);
