'use strict';
const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
const longNames = names.filter((name) => {
  return name.length > 6;
});
//
//Gracias por confiar en nosotros
//
const users = [
  { name: 'María', isPremium: false },
  { name: 'Lucía', isPremium: true },
  { name: 'Susana', isPremium: true },
  { name: 'Rocío', isPremium: false },
  { name: 'Inmaculada', isPremium: false },
];
//
const premiumUsers = users.map((user) => {
  if (user.isPremium === false) {
    return 'bienvenido' + user.name;
  } else {
    return 'gracias por el apoyo' + user.name;
  }
});
console.log(premiumUsers);

const mensajes = users.map((user) =>
  user.isPremium ? 'gracias por el apoyo' + user.name : 'bienvenido' + user.name
);

const onlyPremiumUsers = users.filter((user) => {
  if (user.isPremium === true) {
    return true;
  } else {
    return false;
  }
});
console.log(onlyPremiumUsers);
