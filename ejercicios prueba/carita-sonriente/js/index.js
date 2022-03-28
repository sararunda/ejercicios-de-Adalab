"use strict";
// 1.Que aparezca la nueva cara elegida
const updateButton = document.querySelector(".update");
const select = document.querySelector(".select");
const emojiTex = document.querySelector(".text");
const bodyColor = document.querySelector(".body");
function randomNumber(min, max) {
  const randomDecimals = Math.random() * (max - min) + min;
  return Math.trunc(randomDecimals);
}
function actualizarCarita() {
  const selectValue = select.value;
  if (selectValue === "happy") {
    emojiTex.innerHTML = ":)";
  } else if (selectValue === "sad") {
    emojiTex.innerHTML = ":(";
  }
}
function cambiarElFondo() {
  const number = randomNumber(1, 100);
  if (number % 2 == 0) {
    bodyColor.classList.add("yellow");
    bodyColor.classList.remove("orange");
  } else {
    bodyColor.classList.remove("yellow");
    bodyColor.classList.add("orange");
  }
}

function handleClick() {
  actualizarCarita();
  cambiarElFondo();
}

updateButton.addEventListener("click", handleClick);
