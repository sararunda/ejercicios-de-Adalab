"use strict";
const x = 20;
const y = 10;
// const result = x + y;
// console.log("resultado", result);
const a = 30;
// const result = (x + y + a) / 3;
// console.log("media", result);
//
// const name = "sara";
const surname = "fernandez";
const year = 20;
// console.log("Mi nombre es", name, "y mi apellido es", surname);
const content = `Mi nombre es ${name}, mi apellido es ${surname} y tengo ${year} años`;
// console.log(content);
// console.log(name === "sara" || surname === "fernandez");
if (name === "sara" && surname === "fernandez") {
  //   console.log("ok sara");
} else if (name == "pablo" && surname === "marquez") {
  //   console.log("ok pablo");
} else {
  //   console.log("no");
}
const nose = name === "sara" && surname === "fernandez" ? "ok sara" : "no";
// console.log(nose);
if (name === "sara" && surname === "fernandez" && year > "20") {
  // console.log(content);
}
const inputName = document.querySelector(".js_name");
const inputLastname = document.querySelector(".js_lastName");
const button = document.querySelector(".js_button");
const result = document.querySelector(".js_result");
const title = document.querySelector(".js_title");
const lastPreview = document.querySelector(".js_last");
button.addEventListener("click", () => {
  // valor que escribe la usuaria
  const name = inputName.value;
  const lastname = inputLastname.value;
  result.innerHTML = name + lastname;
});
inputName.addEventListener("keyup", () => {
  title.innerHTML = inputLastname.value;
});
inputLastname.addEventListener("keyup", () => {
  lastPreview.innerHTML = inputLastname.value;
});
