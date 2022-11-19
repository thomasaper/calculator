/* 

Step 1: Create basic math functions

Step 2: Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.

Step 3: Create the functions that populate the display when you click the number buttons. 
        You should be storing the ‘display value’ in a variable somewhere for use in the next step.

Step 4: Make the calculator work! You’ll need to store the first number that is input into the calculator 
        when a user presses an operator, and also save which operation has been chosen and then operate() on 
        them when the user presses the “=” key.

Step 5: Users should be able to string together several operations and get the right answer, 
        with each pair of numbers being evaluated at a time. For example, 12 + 7 - 5 * 3 = should yield 42

*/


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




// operate() function to take an operator and two numbers and call them on one of the basic math fuctions

let operator = '';
let num1 = '';
let num2 = '';

const operate = function(operator, num1, num2) {
  return operator(parseInt(num1),parseInt(num2))
};


// functions to populate the display with 


let displayValue = 0;

const input = document.querySelector('#input');

const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
  
    if (operator == '') {
      num1 += button.id;
      input.innerHTML = num1;
      displayValue = num1;
    } else {
      num2 += button.id;
      input.innerHTML = num2;
      displayValue = num2;
    };
  });
});

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
  input.innerHTML = '';
  operator = "";
  displayValue = 0;
  num1 = '';
  num2 = '';
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
  if (operator === '/') {
    let result = operate(divide, num1, num2);
    input.innerHTML = result;
  } else if ( operator === '+'){
    let result = operate(add, num1, num2);
    input.innerHTML = result;
  } else if ( operator === '-'){
    let result = operate(subtract, num1, num2);
    input.innerHTML = result;;
  } else if ( operator === '*'){
    let result = operate(multiply, num1, num2);
    input.innerHTML = result;
  }
});



