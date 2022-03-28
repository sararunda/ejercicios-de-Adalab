"use strict";
//constantes
const playClick = document.querySelector(".js-play");
const selectvalue = document.querySelector(".js-valueSelect");
const resultComputer = document.querySelector(".js-result-computer");
const resultUser = document.querySelector(".js-result-user");
const winner = document.querySelector(".js-winner");
const piedra = 1;
const tijeras = 2;
const papel = 3;
//
//funcion para el azar
function azarResult(min, max) {
  const randomResult = Math.floor(Math.random() * (max - min + 1) + min);
  return randomResult;
}
//funcion para pasar de numero a sting
function getOptionFromNumber(number) {
  if (number === 1) {
    return "piedra";
  } else if (number === 2) {
    return "tijeras";
  } else {
    return "papel";
  }
}

function handleClick() {
  // convierto los valores en numeros para compararlos
  const userOptionNum = parseInt(selectvalue.value);
  const computerOptionNUm = azarResult(1, 3);

  //llamo a la funcion para convertir en string los números y pintarlos
  const userOptionString = getOptionFromNumber(userOptionNum);
  const computerOptionString = getOptionFromNumber(computerOptionNUm);
  resultUser.innerHTML = `Tu elección: ${userOptionString} `;
  resultComputer.innerHTML = `Resultado computadora: ${computerOptionString}`;

  //comparar valor con pc para ver quien pierde o gana
  if (userOptionNum === computerOptionNUm) {
    winner.innerHTML = "Empate";
  } else if (userOptionNum === piedra && computerOptionNUm === tijeras) {
    winner.innerHTML = "¡Has ganado!";
  } else if (userOptionNum === piedra && computerOptionNUm === papel) {
    winner.innerHTML = "has perdido :(";
  } else if (computerOptionNUm === piedra && userOptionNum === tijeras) {
    winner.innerHTML = "has perdido :(";
  } else {
    winner.innerHTML = "¡has ganado!";
  }
}

playClick.addEventListener("click", handleClick);
