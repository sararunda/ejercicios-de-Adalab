'use strict';
const adalabers = [
  {
    nombre: 'maria',
    edad: 29,
    profesión: 'diseñadora',
  },
  {
    nombre: 'lucia',
    edad: 31,
    profesión: 'ingeniera',
  },
  {
    nombre: 'susana',
    edad: 34,
    profesión: 'periodista',
  },
  {
    nombre: 'rocio',
    edad: 25,
    profesión: 'actriz',
  },
  {
    nombre: 'inmaculada',
    edad: 21,
    profesión: 'diseñadora',
  },
];
//numero de adalabers en el listado
function countAdalabers(array) {
  const count = array.length;
  return count;
}
const adalabersTotal = countAdalabers(adalabers);
console.log(adalabersTotal);

function averageAge(people) {
  let mediaArray = 0;
  for (const person of people) {
    mediaArray += person.edad;
  }
  const resultMedia = mediaArray / adalabers.length;
  return resultMedia;
}
const resultMediaAge = averageAge(adalabers);
console.log(resultMediaAge);
