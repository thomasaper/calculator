// Step 1: Basic math functions

const add = function(...array) {
  return array.reduce((a, b) => a + b);  
};


const subtract = function(...array) {
  return array.reduce((a, b) => a - b);
};


const multiply = function(...array) {
  return array.reduce((a, b) => a * b, 1);
};


const divide = function(...array) {
  return array.reduce((a, b) => a / b);
};



// Step 2: Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.

let operator = '';
let num1 = 0;
let num2 = 0;

const operate = function(operator, num1, num2) {
  return operator(num1,num2)
};


//  Step 3: Create the functions that populate the display when you click the number buttons. 
// You should be storing the ‘display value’ in a variable somewhere for use in the next step.

let displayValue = 0;



const input = document.querySelector('#input');

const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    input.innerHTML = button.id;
    displayValue = button.id;
    
    if (operator == '') {
      num1 = button.id;
    } else {
      num2 = button.id;
    };
  });

});

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
  input.innerHTML = '';
  operator = "";
  displayValue = 0;
});

const btnDivide = document.querySelector('.btnDivide');
btnDivide.addEventListener('click', () => {
  input.innerHTML = "/";
  operator = "/";
});

const btnPlus = document.querySelector('.btnPlus');
btnPlus.addEventListener('click', () => {
  input.innerHTML = "+";
  operator = "+";
});

const btnMinus = document.querySelector('.btnMinus');
btnMinus.addEventListener('click', () => {
  input.innerHTML = "-";
  operator = "-";
});

const btnMultiply = document.querySelector('.btnMultiply');
btnMultiply.addEventListener('click', () => {
  input.innerHTML = "*";
  operator = "*";
});

const btnEqual = document.querySelector('.btnEqual');
btnEqual.addEventListener('click', () => {
  input.innerHTML = "result";
  operator = "=";
});


// Step 4: Make the calculator work! You’ll need to store the first number that is input into the calculator 
// when a user presses an operator, and also save which operation has been chosen and then operate() on 
// them when the user presses the “=” key.