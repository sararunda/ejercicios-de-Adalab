"use strict";
//Definición de las variables
const buttonInput = document.querySelector(".js-button");
const nameInput = document.querySelector(".js-name");
const lastName = document.querySelector(".js-lastname");
const list = document.querySelector(".js-list");
const error = document.querySelector(".js-error");
const phoneInput = document.querySelector(".js-phone");
//
//
function resetValue() {
  error.innerHTML = "";
  nameInput.value = "";
  lastName.value = "";
  phoneInput.value = "";
}
function handleClick() {
  const nameValue = nameInput.value;
  const lastNameValue = lastName.value;
  const phoneValue = phoneInput.value;
  if (nameValue === "" || lastNameValue === "" || phoneValue === "") {
    error.innerHTML = `*Debe introducir todos los datos`;
  } else {
    list.innerHTML += `<li>${nameValue} ${lastNameValue} ${phoneValue}</li>`;
    resetValue();
  }
}

buttonInput.addEventListener("click", handleClick);
//
