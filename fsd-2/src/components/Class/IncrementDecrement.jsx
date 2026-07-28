// // import React from 'react'
// // import { useState } from 'react'

// // export const IncrementDecrement = () => {
// //   const [count, setCount] = useState(0)

// //   const incrementFunction = () => {
// //     setCount(count + 1)
// //   }

// //   const decrementFunction = () => {
// //     setCount(count - 1)
// //   }

// //   return (
// //     <div>
// //       <h1>Increment <strong> && </strong> Decrement</h1>
// //       <p>{count}</p>
// //       <button onClick ={incrementFunction}>
// //         +
// //       </button>
// //       <button onClick ={decrementFunction}>
// //         -
// //       </button>
// //     </div>
// //   )
// // }

// // export default IncrementDecrement

// import React, { useState } from "react";

// const Calculator = () => {
//   const [num1, setNum1] = useState("");
//   const [num2, setNum2] = useState("");
//   const [result, setResult] = useState(0);

//   const add = () => {
//     setResult(Number(num1) + Number(num2));
//   };

//   const subtract = () => {
//     setResult(Number(num1) - Number(num2));
//   };

//   const multiply = () => {
//     setResult(Number(num1) * Number(num2));
//   };

//   const divide = () => {
//     if (Number(num2) === 0) {
//       setResult("Cannot divide by zero");
//     } else {
//       setResult(Number(num1) / Number(num2));
//     }
//   };

//   return (
//     <div>
//       <h1>Simple Calculator</h1>

//       <input
//         type="number"
//         placeholder="Enter first number"
//         value={num1}
//         onChange={(e) => setNum1(e.target.value)}
//       />

//       <input
//         type="number"
//         placeholder="Enter second number"
//         value={num2}
//         onChange={(e) => setNum2(e.target.value)}
//       />

//       <div style={{ marginTop: "10px" }}>
//         <button onClick={add}>+</button>
//         <button onClick={subtract}>-</button>
//         <button onClick={multiply}>*</button>
//         <button onClick={divide}>÷</button>
//       </div>

//       <h2>Result: {result}</h2>
//     </div>
//   );
// };

// export default Calculator;