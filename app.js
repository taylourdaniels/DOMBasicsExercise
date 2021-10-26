const portillos = document.getElementById(`portillos`);

const images = document.getElementsByTagName('img');

const centered = document.getElementsByClassName(`center`);

const ginosEast = document.querySelector(`#ginos`);

const pTags = document.querySelectorAll(`p`);

const h1 = document.querySelector(`h1`);

h1.innerText = `Matt's Favorite Places To Eat In Sweet Home Chicago!`;

const others = document.querySelector(`#others`);

others.innerHTML=`<h3>Other Favorites</h3>`;

const aTag = document.querySelector('a');

aTag.href=`https://www.choosechicago.com/articles/food-drink/5-classic-chicago-foods/`;

h1.classList.add(`background`,`text-color`);

h1.classList.remove(`background`);

const h4 = document.createElement(`h4`);

h4.innerText = `CHICAGO: A great place to eat!`;

const body = document.querySelector(`body`);
body.prepend(h4);

const h5 = document.createElement(`h5`);

h5.innerText = `See you in the Windy City Sometime!`;

aTag.insertAdjacentElement(`afterend`, h5);

const uli = document.querySelector("li");

uli.remove();