import moment from 'moment';


import css from './scss/style.scss';

console.log("Hola amigos 24!!", moment().format());

document.querySelector("body").addEventListener("click", (event) => {
    console.log("Hello!");
})
