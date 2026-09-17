function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return (b === 0 ? 'Error: Cannot divide by zero' : a / b);
}

module.exports = {
  add,
  subtract,
  multiply,
  divide
};