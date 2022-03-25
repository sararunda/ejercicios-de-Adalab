"use strict";
// //
// //EJERCICIO DE EVENTO, FUNCIONES Y CONDICIONALES
// const nameInput = document.querySelector(".js-name");
// const lastnameInput = document.querySelector(".js-lastname");
// const buttonInput = document.querySelector(".js-button");
// const textAlert = document.querySelector(".js-alert");
// nameInput.value = "Sara";
// lastnameInput.value = "Fernández Ramos";
// //
// //está función es para que al hacer click devuelva un resultado
// function handleClick(event) {
//   const name = nameInput.value;
//   const lastname = lastnameInput.value;
//   if (name === "Sara" && lastname === "Fernández Ramos") {
//     textAlert.innerHTML = `Bienvenida Adalaber ${name} ${lastname}`;
//   } else {
//     textAlert.innerHTML = `No puedes entrar`;
//   }
// }
// //escucho el click del botón seguido de la función que quiero que haga
// buttonInput.addEventListener("click", handleClick);
// //
// //
//
//
//variables
const list = document.querySelector(".js-list");
list.innerHTML += `<li>Mayor de edad</li>`;
list.innerHTML += `<li>Tener mascota</li>`;
list.innerHTML += `<li>Documentacion</li>`;
const newButton = document.querySelector(".js-new-button");
newButton.innerHTML = `<input
type="button"
name="aceptar"
id="aceptar"
value="aceptar"
class="js-button"
/>`;
const gatito = document.querySelector(".gatito");
const guine = document.querySelector(".guine");
//funcion
function collapsed() {
  if (list.classList.contains("hidden")) {
    list.classList.remove("hidden");
  } else {
    list.classList.add("hidden");
  }
  if (gatito.classList.contains("hidden")) {
    gatito.classList.remove("hidden");
  } else {
    gatito.classList.add("hidden");
  }
  if (guine.classList.contains("hidden")) {
    guine.classList.remove("hidden");
  } else {
    guine.classList.add("hidden");
  }
}
//evento
newButton.addEventListener("click", collapsed);
