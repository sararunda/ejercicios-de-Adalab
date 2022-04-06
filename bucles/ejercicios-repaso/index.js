'use strict';
//ejercicio 4 de bucles 7.2
const list = [4, 6, 7, 8, 9];

const list2 = [4, 6, 7, 8, 9, 9];

function average(list) {
  let suma = 0;
  for (let index = 0; index < list.length; index++) {
    suma += list[index];
  }
  const media = suma / list.length;
  return media;
}

const medialist1 = average(list);

const medialist2 = average(list2);
// console.log(medialist2);

//ejercicio 5 de bucles 7.2
//1 .traer elementos de html
//2. escuchar al boton
//3. funcion manejadora de ese evento
const button = document.querySelector('.js-button');
const inputList = document.querySelectorAll('.js-input');
const message = document.querySelector('.js-mensaje');

//funciones
function handleClick(event) {
  event.preventDefault();
  for (const itemInput of inputList) {
    console.log(itemInput.value);
    message.innerHTML += `A mi tmb me gusta! ${itemInput.value}`;
  }
}
//eventos
button.addEventListener('click', handleClick);
//
//
//ejercicio 7.3 tipos de datos de un array
const items = [
  'Ada',
  1815,
  ['Informática', 'Matemática', 'Escritora'],
  {
    mother: 'Anna Isabella',
    father: 'Lord Byron',
  },
];
for (let index = 0; index < items.length; index++) {
  const valor = items[i];
  const tipo = typeof items[i];
  console.log(`el dato ${valor} esta en la posicion ${i} y el de tipo ${tipo}`);
}
