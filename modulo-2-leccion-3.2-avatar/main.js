"use strict";
// avatar por defecto
const DEFAULT_AVATAR = "https://via.placeholder.com/150";
// avatar que eligió el usuario al registrarse
let userAvatar = "http://www.fillmurray.com/300/300";
//
//
const avatar = document.querySelector(".user__avatar");
console.log(avatar);

const srcValue = userAvatar || DEFAULT_AVATAR;

avatar.setAttribute("src", srcValue);
