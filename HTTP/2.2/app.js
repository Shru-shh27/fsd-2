const math = require('./mathUtils')

console.log("welcome to the simple calculator")
console.log("1. + Additiion 2. - Subtraction 3. * Multiplication 4. / Division ")

const operator = process.argv[2]
let a = parseFloat(process.argv[3])
let b = parseFloat(process.argv[4])

let ans;

switch (operator) {
  case '+':
    ans = math.add(a, b)
    break;
  case '-':
    ans = math.subtract(a, b)
    break;
    case '*':
    ans = math.multiply(a, b)   
    break;
    case '/':
    ans = math.divide(a, b)
    break;
    default:
    console.log("Invalid operator. Please use +, -, *, or /.")
}

console.log("hey you got the answer:", ans);