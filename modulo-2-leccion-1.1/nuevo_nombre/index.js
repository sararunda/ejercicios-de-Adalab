"use strict";
const title = document.querySelector(".title");
const winner = document.querySelector(".winner");
const titleWinner = title.innerHTML + winner.innerHTML;

title.innerHTML = titleWinner;

console.log(titleWinner)