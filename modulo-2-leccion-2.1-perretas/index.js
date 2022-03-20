const firstDogImage =
  "https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg";
const firstDogName = "Dina";

const secondDogImage =
  "https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg";
const secondDogName = "Luna";

const thirdDogImage =
  "https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg";
const thirdDogName = "Lana";
const lista = document.querySelector(".list");
const content1 = `<li><img src='${firstDogImage}'/> ${firstDogName}</li>`;
const content2 = `<li> <img src='${secondDogImage}'/>  ${secondDogName}</li>`;
const content3 = `<li><img src='${thirdDogImage}'/>   ${thirdDogName}</li>`;
lista.innerHTML = content1 + content2 + content3;
