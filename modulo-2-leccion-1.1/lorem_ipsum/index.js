"use strict";
const container = document.querySelector(".container");
const title = "<h1>Lorem ipsum</h1>"
const image = '<img src="http://via.placeholder.com/350x150" />';
const text = "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>" 
container.innerHTML = title + image + text
container.classList.add("hidden");

