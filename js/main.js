"use strict";

debugger;
// general un número aleatorio entre 1 y 100
function getRandomNumber(max) {
  return Math.ceil(Math.random() * (101 - 1) + 1);
}
console.log(getRandomNumber());

const btn = document.querySelector(".js-button");
const userNumber = document.querySelector(".js-number");
const clues = document.querySelector(".js-clue ");
// función que lea el número del usuario y me devuelva 4 opciones
// a partir de aqui estas funciones als tiene que escuchar el botón

function updateResult {
    compareNumbers();
    getClues();
}

// leer y comparar el input con el numero random
function compareNumbers() {
  const userNumberValue = userNumber.value;
  const randomNumber = getRandomNumber();
  userNumber.value = getRandomNumber();
}


function getClues() {
  if (randomNumber < userNumberValue) {
    console.log("Demasiado alto");
  } else if (randomNumber > userNumberValue) {
    console.log("Demasiado bajo");
  } else if (randomNumber === userNumberValue) {
    console.log("Has ganado campeona!!!");
  } else {
    console.log("El número debe estar entre 1 y 100");
  }
  const cluesValue = clues.value;
  getClues.innerHTML = cluesValue;
}



// userNumber;

btn.addEventListener("click");
