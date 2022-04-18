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
    //renderizar HTML
    let html = '';
    for (const palette of palettes) {
      html += `<li>`;
      html += `<h2>${palette.name}</h2>`;
      html += `<div class = "palette__colors">`;
      for (const paletteColor of palette.colors) {
        html += `<div class="palette__color" style="background-color: #${paletteColor}"></div>`;
      }
      html += `</div>`;
      html += `</li>`;
    }
    listPalettes.innerHTML = html;
  });
//guardar mis paletas preferidas
let favorites = [];
