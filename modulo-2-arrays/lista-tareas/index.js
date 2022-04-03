'use strict';
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
