//Query Selectors
const form = document.querySelector(".calc-form");
const topDisplay = document.querySelector(".top-display");
const display = document.querySelector(".display");
const nums = document.querySelectorAll(".num");
const ops = document.querySelectorAll(".op");
const equals = document.querySelector(".equals");
const clear = document.querySelector(".clear");
const point = document.querySelector(".point");
const del = document.querySelector(".del");
const zero = document.querySelector(".zero");

//Variables
display.innerHTML = "";
topDisplay.innerHTML = "";
let number1 = 0;
let number2 = 0;
let operator = "";

//Function Buttons
clear.addEventListener("click", function () {
  number1 = 0;
  number2 = 0;
  display.innerHTML = "";
  topDisplay.innerHTML = "";
  operator = "";
});
del.addEventListener("click", function () {
  display.innerHTML = display.innerHTML.slice(0, -1);
});
zero.addEventListener("click", function () {
  if (display.innerHTML === "0") {
    return (display.innerHTML = display.innerHTML);
  } else {
    display.innerHTML = display.innerHTML + zero.value;
  }
});

//Form Control
form.addEventListener("submit", function (eventObject) {
  eventObject.preventDefault();
});

//Calculations
const calculate = (num1, num2, op) => {
  let result;
  if (op === "+") {
    result = num1 + num2;
    return result;
  } else if (op === "-") {
    result = num1 - num2;
    return result;
  } else if (op === "/") {
    result = num1 / num2;
    return result;
  } else if (op === "x") {
    result = num1 * num2;
    return result;
  }
};
equals.addEventListener("click", function () {
  let total;
  if (operator) {
    number2 = Number(display.innerHTML);
    if (number2 !== "0") {
      total = calculate(number1, number2, operator);
      topDisplay.innerHTML = total;
      display.innerHTML = "";
      operator = "";
      number1 = 0;
      number2 = 0;
    } else {
      display.innerHTML = "Infinity";
    }
  }
});

//Calc Keys
for (let num of nums) {
  num.addEventListener("click", function () {
    if (display.innerHTML.length < 11) {
      if (!operator && topDisplay.innerHTML) {
        number1 = 0;
        number2 = 0;
        topDisplay.innerHTML = "";
        operator = "";
        return (display.innerHTML = display.innerHTML + num.value);
      }
      display.innerHTML = display.innerHTML + num.value;
    }
    display.innerHTML = display.innerHTML;
  });
}
for (let op of ops) {
  op.addEventListener("click", function () {
    if (
      topDisplay.innerHTML === "Please input a number or an operator" ||
      topDisplay.innerHTML === "Infinity"
    ) {
      return (topDisplay.innerHTML = "Please input a number or an operator");
    }
    if (!topDisplay.innerHTML && !display.innerHTML) {
      operator = operator;
      topDisplay.innerHTML = topDisplay.innerHTML;
    } else if (topDisplay.innerHTML && operator && !display.innerHTML) {
      operator = operator;
      topDisplay.innerHTML = topDisplay.innerHTML;
    } else if (!topDisplay.innerHTML) {
      operator = op.value;
      number1 = Number(display.innerHTML);
      topDisplay.innerHTML = display.innerHTML + " " + operator + " ";
      display.innerHTML = "";
    } else if (number1 && operator && display.innerHTML) {
      let total;
      number2 = Number(display.innerHTML);
      total = calculate(number1, number2, operator);
      operator = op.value;
      topDisplay.innerHTML = total + " " + operator + " ";
      number1 = total;
      number2 = 0;
      display.innerHTML = "";
    } else if (topDisplay.innerHTML) {
      operator = op.value;
      number1 = Number(topDisplay.innerHTML);
      topDisplay.innerHTML = topDisplay.innerHTML + " " + operator + " ";
    }
  });
}
point.addEventListener("click", function () {
  if (!display.innerHTML.includes(point.value)) {
    display.innerHTML = display.innerHTML + point.value;
  }
  display.innerHTML = display.innerHTML;
});
