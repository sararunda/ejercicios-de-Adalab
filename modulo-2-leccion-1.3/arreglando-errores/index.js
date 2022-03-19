"use strict";
const address = "Málaga";
/*no se pueden reasignar variables const"*/

// const titleElement = document.querySelector(".title").innerHTML = "Bienvenida";
// document.querySelector(".title").innerHTML = "Bienvenida";

// const titleElement = document.querySelector(".title")
// titleElement.innerHTML = "Bienvenida"

const titleElement = document.querySelector(".title")
titleElement.innerHTML = "Bienvenida";

console.log(titleElement.innerHTML)

const adalaberTitle = titleElement.innerHTML + " adalaber";
titleElement.innerHTML = adalaberTitle;

console.log(adalaberTitle)
console.log(titleElement.innerHTML)
