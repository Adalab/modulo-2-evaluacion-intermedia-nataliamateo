"use strict";

const btn = document.querySelector(".js-button");
const userNumber = document.querySelector(".js-number");
const clues = document.querySelector(".js-clue");
const counterNumber = document.querySelector(".js-counter");

// general un número aleatorio entre 1 y 100
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
// le indicas el máximo del parámetro del número
const randomNumber = getRandomNumber(100);

// suma de la funciones para llamar a las dos desde un solo listener
function handleBtn(ev) {
  // evitar comportamientos del form
  ev.preventDefault();
  getClues();
  showCounter();
}

function getClues() {
  // va dentro el .value porque necesitamos leerlo en este momento
  // todo input devuelve un valor string pr eso necesitamos un parseint
  const userNumberValue = parseInt(userNumber.value);
  // el orden de los inputs importa, hay que poner de la que menos abarque a mas
  if (randomNumber === userNumberValue) {
    clues.innerHTML = "Has ganado campeona!!!";
    // numeros menos que 100 o mayores que 1 para que el resultado sea entre 1 y 100
  } else if (userNumberValue > 100 || userNumberValue < 1) {
    clues.innerHTML = "El número debe estar entre 1 y 100";
  } else if (randomNumber < userNumberValue) {
    clues.innerHTML = "Demasiado alto";
  } else if (randomNumber > userNumberValue) {
    clues.innerHTML = "Demasiado bajo";
  } else {
    ("Que está pasando");
  }
  // sacar los inputs a una funcion para reutilizar código
}

// función del contador
/* empieza el contador en 0, una variable que sea función y que a la variable de fuera se le vaya sumando 1*/
let counter = 0;
const showCounter = () => {
  counter += 1;
  counterNumber.innerHTML = counter;
};

btn.addEventListener("click", handleBtn);
