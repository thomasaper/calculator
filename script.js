

const add = function(a, b) {

	let resultAdd = a+b;
  return resultAdd;

};

const subtract = function(a, b) {

  let resultSubstract = a-b;
  return resultSubstract;
	
};

const sum = function(...array) {

const initialValue = 0;
const sumWithInitial = array.reduce(
  (a, b) => a + b,
  initialValue
);

return sumWithInitial;

};

const multiply = function(...array) {

  const initialValue = 1;
  const sumWithInitial = array.reduce(
  (a, b) => a * b,
  initialValue
);

return sumWithInitial

};

const divide = function(...array) {

    const sumWithInitial = array.reduce(
    (a, b) => a / b,
  );
  
  return sumWithInitial
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