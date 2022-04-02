'use strict';
const adalabers = [
  {
    name: 'julia',
    city: 'madrid',
    address: {
      country: 'España',
      zp: 2080,
    },
  },
  {
    name: 'marina',
    city: 'murcia',
    address: {
      country: 'EEUU',
      zp: 1000,
    },
  },
  {
    name: 'marcela',
    city: 'barcelona',
    address: {
      country: 'Italia',
      zp: 4500,
    },
  },
];
//map
//ada se refiere a cada elemento del array
const newAdalabers = adalabers.map((ada) => {
  const newAda = {
    name: ada.name,
    city: ada.city,
    country: ada.address.country,
  };
  return newAda;
});
console.log(newAdalabers);
// const numer = [1, 2, 3, 4, 5];
// const newnumber = number.map((n) => n * 1.21);

// filter
// filtrar las adalabers en barcelona
const cityInput = 'Barcelona';
const nameInput = "marcela"
const dataFitered = adalabers.filter(
  ((person) => person.city.toLowerCase() === cityInput.toLowerCase()).filter((person => person.name === nameInput));

console.log(dataFitered);
//me devuelve el primer elemento que cumpla con la condicion
const indexPerson = adalabers.findIndex(pepino=> pepino.name === "julia")

const findPerson = adalabers.find(adalaber => adalaber.address.zp === 1000);
