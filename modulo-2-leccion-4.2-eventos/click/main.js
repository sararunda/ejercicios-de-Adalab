"use strict";
const button = document.querySelector(".js-button");
button.addEventListener("click", () => {
  console.log("Mi primer click, ¡ole yo y la mujer que me parió!");
  const text = document.querySelector(".js-text");
  console.log(text);
  text.innerHTML = "Mi primer click, ¡ole yo y la mujer que me parió!";
});
