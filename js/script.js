// Basic math functions

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



// Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.

const operate = function(operator, num1, num2) {
  return operator(num1,num2)
};


// Create the functions that populate the display when you click the number buttons. 
// You should be storing the ‘display value’ in a variable somewhere for use in the next step.

let displayValue = [];

const input = document.querySelector('#input');

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    input.innerHTML = button.id;
  });
});

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
  input.innerHTML = '';
});

const btnDivide = document.querySelector('.btnDivide');
btnDivide.addEventListener('click', () => {
  input.innerHTML = "/";
});

const btnPlus = document.querySelector('.btnPlus');
btnPlus.addEventListener('click', () => {
  input.innerHTML = "+";
});

const btnMinus = document.querySelector('.btnMinus');
btnMinus.addEventListener('click', () => {
  input.innerHTML = "-";
});

const btnMultiply = document.querySelector('.btnMultiply');
btnMultiply.addEventListener('click', () => {
  input.innerHTML = "*";
});

const btnEqual = document.querySelector('.btnEqual');
btnEqual.addEventListener('click', () => {
  input.innerHTML = "result";
});




/*

const one = document.querySelector('.one');
one.addEventListener('click', () => {
  displayValue += 1;
});

const two = document.querySelector('.two');
two.addEventListener('click', () => {
  displayValue += 2;
});

const three = document.querySelector('.three');
three.addEventListener('click', () => {
  displayValue += 3;
});

const four = document.querySelector('.four');
four.addEventListener('click', () => {
  displayValue += 4;
});

const five = document.querySelector('.five');
five.addEventListener('click', () => {
  displayValue += 5;
});

const six = document.querySelector('.six');
six.addEventListener('click', () => {
  displayValue += 6;
});

const seven = document.querySelector('.seven');
seven.addEventListener('click', () => {
  displayValue += 7;
});

const eight = document.querySelector('.eight');
eight.addEventListener('click', () => {
  displayValue += 8;
});

const nine = document.querySelector('.nine');
nine.addEventListener('click', () => {
  displayValue += 9;
});

const zero = document.querySelector('.zero');
zero.addEventListener('click', () => {
  displayValue += 0;
});

const btnDivide = document.querySelector('.btnDivide');
btnDivide.addEventListener('click', () => {
  displayValue += "/";
});

const btnPlus = document.querySelector('.btnPlus');
btnPlus.addEventListener('click', () => {
  displayValue += "+";
});

const btnMinus = document.querySelector('.btnMinus');
btnPlus.addEventListener('click', () => {
  displayValue += "-";
});

const btnMultiply = document.querySelector('.btnMultiply');
btnMultiply.addEventListener('click', () => {
  displayValue += "*";
});

*/