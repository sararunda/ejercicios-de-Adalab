'use strict';
//obtener datos de html
const listPalettes = document.querySelector('.js-list-palettes');
const urlServer =
  'https://beta.adalab.es/ejercicios-extra/js-ejercicio-de-paletas/data/palettes.json';
let palettes = [];

//traer datos del servidor
fetch(urlServer)
  .then((response) => response.json())
  .then((data) => {
    palettes = data.palettes;
    console.log(palettes);
  });
