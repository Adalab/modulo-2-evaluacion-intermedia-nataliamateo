"use strict";

debugger;
// general un número aleatorio entre 1 y 100

const btn = document.querySelector(".js-button");
const userNumber = document.querySelector(".js-number");
const clues = document.querySelector(".js-clue");

function getRandomNumber(max) {
  return Math.ceil(Math.random() * (100 - 1) + 1);
}

function getClues() {
  debugger;
  const userNumberValue = userNumber.value;
  const randomNumber = getRandomNumber();
  if (randomNumber < userNumberValue) {
    console.log((clues.innerHTML = "Demasiado alto"));
  } else if (randomNumber > userNumberValue) {
    console.log((clues.innerHTML = "Demasiado bajo"));
  } else if (randomNumber === userNumberValue) {
    console.log((clues.innerHTML = "Has ganado campeona!!!"));
  } else {
    console.log((clues.innerHTML = "El número debe estar entre 1 y 100"));
  }
}

btn.addEventListener("click", getClues);
