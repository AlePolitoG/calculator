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
let number_1 = 1;
let number_2 = 2;
let operator = "/";

function operate() {
  switch (operator) {
    case "+":
      return add(number_1, number_2);
    case "-":
      return subtract(number_1, number_2);
    case "*":
      return multiply(number_1, number_2);
    case "/":
      return divide(number_1, number_2);
  }
}

//index const
const equal = document.getElementById("equal");
const numbers = document.querySelectorAll("#num");
const operators = document.querySelectorAll("#operator");
const clear = document.getElementById("clear");
const delete_button = document.getElementById("delete");
