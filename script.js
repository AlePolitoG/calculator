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
const point = document.querySelector("#point");
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
function clears() {
  number_1html.textContent = "0";
  result.textContent = "";
  cont = "";
  alert.textContent = "";
  number_1 = "";
  operator = "";
}
clear.addEventListener("click", () => {
  clears();
});

//result
function F_result() {
  alert.textContent = "";
  result.textContent = operate();
  number_1html.textContent = "-";
  cont = operate();
}
equal.addEventListener("click", () => {
  if (operator === "/" && result.textContent === "0") {
    clears();
    alert.textContent = "what do you want to do my friend? :)";
  }
  if (number_1 !== "" && cont !== "") {
    F_result();
  } else alert.textContent = "that is not possible my friend jeje";
});

//operator log
arrOperators.forEach((e) => {
  e.addEventListener("click", () => {
    if (operator !== "") {
      if (operator === "/" && result.textContent === "0") {
        clears();
        alert.textContent = "what do you want to do my friend? :)";
      } else F_result();
      number_1 = "";
    }
    operator = e.textContent;
    number_1html.textContent = `${cont}${operator}`;
    number_1 = cont;
    result.textContent = "";
    cont = "";
  });
});

//delete
delete_button.addEventListener("click", () => {
  let test = result.textContent.split("");
  test.splice(-1, 1);
  result.textContent = test.join("");
  cont = test.join("");
});

// point
point.addEventListener("click", () => {
  if (!cont.includes(".")) {
    let test = result.textContent.split("");
    test.push("temp");
    test.splice(-1, 1, ".");
    result.textContent = test.join("");
    cont = test.join("");
  }
});
