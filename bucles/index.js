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
