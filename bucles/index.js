'use strict';
//
const numbers0 = [1, 2, 3, 4, 5];
const numbers1 = [1, 2, 3, 4, 5, 6, 7];

//

function average(numbers) {
  let acumulador = 0;
  for (const number of numbers) {
    acumulador += number;
  }
  const numberMedia = acumulador / numbers.length;
  return numberMedia;
}
const result1 = average(numbers1);
const result0 = average(numbers0);

const titles = document.querySelectorAll('h1');
for (const title of titles) {
  title.classList.add('js-hidden');
}
//concat dos array, me genera un array a partir de dos
//
const newArray = numbers0.concat(numbers1);
//borrar elementos del Array con splice
const restIndexArray = newArray.splice(1, 4, 'HOLA', 'MUNDO');
console.log(newArray);
//indexOf nos devuelve la posicion del elemento
const indexWordMundo = newArray.indexOf('MUNDO');
console.log(indexWordMundo);
const indexSeptemberWord = newArray.indexOf('Septiembre');
console.log(indexSeptemberWord);
