"use strict";

function opacitySecondButton() {
  console.log("me he ejecutado");
  const button2 = document.querySelector(".button:nth-child(2)");
  button2.classList.add("opacity");
}

const button1 = document.querySelector(".button:first-child");
button1.addEventListener("click", opacitySecondButton);

console.log(button1);
