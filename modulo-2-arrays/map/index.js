'use strcit';
const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
//
const saludo = 'bienvenida ';
const saludoNames = names.map((name) => {
  return saludo + name;
});
console.log(saludoNames);
console.log(names);
