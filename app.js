//Query Selectors
const form = document.querySelector(".calc-form");
const topDisplay = document.querySelector(".top-display");
const display = document.querySelector(".display");
const nums = document.querySelectorAll(".num");
const clearBtn = document.querySelector(".clear");
const plusBtn = document.querySelector(".plus");
const minusBtn = document.querySelector(".minus");
const divideBtn = document.querySelector(".divide");
const timesBtn = document.querySelector(".times");
const equalsBtn = document.querySelector(".equals");

//Variables
display.innerHTML = "";
topDisplay.innerHTML = "";
let number1 = 0;
let number2 = 0;
let operator;
let total;

//Form Control
form.addEventListener("submit", function (eventObject) {
  eventObject.preventDefault();
});

//Calc Buttons
for (let num of nums) {
  num.addEventListener("click", function () {
    if (display.innerHTML.length < 25) {
      display.innerHTML = display.innerHTML + num.value;
    } else {
      display.innerHTML = display.innerHTML;
    }
    if (total && !operator) {
      number1 = 0;
      number2 = 0;
      total = 0;
      topDisplay.innerHTML = "";
      display.innerHTML = num.value;
    }
  });
}
clearBtn.addEventListener("click", function () {
  number1 = 0;
  number2 = 0;
  total = 0;
  topDisplay.innerHTML = "";
  display.innerHTML = "";
});
plusBtn.addEventListener("click", function () {
  if (display.innerHTML) {
    number1 = Number(display.innerHTML);
    operator = plusBtn.value;
    topDisplay.innerHTML = display.innerHTML + " " + operator;
    display.innerHTML = "";
  }
});
minusBtn.addEventListener("click", function () {
  if (display.innerHTML) {
    number1 = Number(display.innerHTML);
    operator = minusBtn.value;
    topDisplay.innerHTML = display.innerHTML + " " + operator;
    display.innerHTML = "";
  }
});
divideBtn.addEventListener("click", function () {
  if (display.innerHTML) {
    number1 = Number(display.innerHTML);
    operator = divideBtn.value;
    topDisplay.innerHTML = display.innerHTML + " " + operator;
    display.innerHTML = "";
  }
});
timesBtn.addEventListener("click", function () {
  if (display.innerHTML) {
    number1 = Number(display.innerHTML);
    operator = timesBtn.value;
    topDisplay.innerHTML = display.innerHTML + " " + operator;
    display.innerHTML = "";
  }
});
equalsBtn.addEventListener("click", function () {
  if (number1) {
    number2 = Number(display.innerHTML);
    if (operator === "+") {
      total = addNums(number1, number2);
      display.innerHTML = total;
      operator = "";
      return total;
    } else if (operator === "-") {
      total = subNums(number1, number2);
      display.innerHTML = total;
      operator = "";
      return total;
    } else if (operator === "/") {
      total = divNums(number1, number2);
      display.innerHTML = total;
      operator = "";
      return total;
    } else if (operator === "x") {
      total = timesNums(number1, number2);
      display.innerHTML = total;
      operator = "";
      return total;
    }
  }
});

//Calculations
const addNums = (num1, num2) => {
  let total = 0;
  total = num1 + num2;
  topDisplay.innerHTML = total;
  return total;
};
const subNums = (num1, num2) => {
  let total = 0;
  total = num1 - num2;
  topDisplay.innerHTML = total;
  return total;
};
const divNums = (num1, num2) => {
  let total = 0;
  total = num1 / num2;
  topDisplay.innerHTML = total;
  return total;
};
const timesNums = (num1, num2) => {
  let total = 0;
  total = num1 * num2;
  topDisplay.innerHTML = total;
  return total;
};
