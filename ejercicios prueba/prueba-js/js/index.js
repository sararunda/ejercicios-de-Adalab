"use strict";
//
//
const nameInput = document.querySelector(".js-name");
const lastnameInput = document.querySelector(".js-lastname");
const buttonInput = document.querySelector(".js-button");
const textAlert = document.querySelector(".js-alert");
nameInput.value = "sara";
lastnameInput.value = "fernandez";
//
//está función es para que al hacer click devuelva un resultado
function handleClick(event) {
  const name = nameInput.value;
  const lastname = lastnameInput.value;
  if (name === "sara") {
    textAlert.innerHTML = `Bienvenida Adalaber ${name} ${lastname}`;
  } else {
    textAlert.innerHTML = `No puedes entrar`;
  }
}
//escucho el click del botón seguido de la función que quiero que haga
buttonInput.addEventListener("click", handleClick);
//
//
