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

