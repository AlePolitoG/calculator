//algorithms
function add(value1, value2) {
  return value1 + value2;
}

function subtract(value1, value2) {
  return value1 - value2;
}

function multiply(value1, value2) {
  return value1 * value2;
}

function divide(value1, value2) {
  return value1 / value2;
}
let number_1 = "";
let number_2 = "";
let operator = "";

function operate() {
  switch (operator) {
    case "+":
      return add(Number(cont), Number(number_1));
    case "-":
      return subtract(Number(number_1), Number(cont));
    case "*":
      return multiply(Number(cont), Number(number_1));
    case "/":
      return divide(Number(cont), Number(number_1));
  }
}

//index const
const equal = document.getElementById("equal");
const numbers = document.querySelectorAll("#num");
const operators = document.querySelectorAll("#operator");
const clear = document.getElementById("clear");
const delete_button = document.getElementById("delete");
const number_1html = document.getElementById("pOperation");
const result = document.getElementById("pResult");
const alert = document.getElementById("alert");
//keys
let arrOperators = Array.from(operators);
let arrNumbers = Array.from(numbers);
//first value
let cont = "";
arrNumbers.forEach((e) => {
  e.addEventListener("click", () => {
    let test = e.textContent;
    if (cont.length <= 7) {
      cont += test;
      result.textContent = cont;
    } else if (cont.length >= 8) {
      alert.textContent = "thats the limit!";
    }
  });
});

//clear
clear.addEventListener("click", () => {
  number_1html.textContent = "0";
  result.textContent = "";
  cont = "";
  alert.textContent = "";
});

//result
equal.addEventListener("click", () => {
  result.textContent = operate();
  number_1html.textContent = "-";
  cont = operate();
});
//operator log

arrOperators.forEach((e) => {
  e.addEventListener("click", () => {
    operator = e.textContent;
    number_1html.textContent = `${cont}${operator}`;
    number_1 = cont;
    result.textContent = "";
    cont = "";
  });
});
