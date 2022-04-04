'use strict';
//flujo cuando carga la página
//1.Pido los datos al servidor
//2. pinto los datos en el html
//3. esccuhar el evento sobre checkbox

//flujo ocurre las acciones de la usuaria
//1.cuando la usuaria haga click en el checkbox recojo los datos
//2. modificar los datos
//3. repintar los datos
// 4. volver a escuchar los eventos
const tasksList = [
  { name: 'Recoger setas en el campo', completed: true },
  { name: 'Comprar pilas', completed: true },
  { name: 'Poner una lavadora de blancos', completed: true },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false,
  },
];
const listLength = tasksList.length;
console.log('hay', listLength, 'tareas en la lista');

function getData() {
  fetch();
}
//Cuantas tareas hay
// function taskNumberList(list) {
//   let numberTask = 0;
//   for (const task of list) {
//     numberTask += task.length;
//   }
//   const totalNumber = numberTask;
//   return totalNumber;
// }

// const totalNumbList = taskNumberList(tasksList);
