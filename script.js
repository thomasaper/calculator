// Basic math functions

const sum = function(...array) {
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

const power = function(a, b) {
  return Math.pow(a, b);
};


const factorial = function(a) {
  if (a === 0 || a === 1) return 1;
  for (let i = a - 1; i >= 1; i--){
    a*=i;
  };
  return a;
};

