// import React, { useState } from "react";

// export const Calculator = () => {
//   const [num1, setNum1] = useState("");
//   const [num2, setNum2] = useState("");
//   const [result, setResult] = useState("");

//   const add = () => {
//     setResult(Number(num1) + Number(num2));
//   };

//   const Sub = () => {
//    setResult(Number(num1) - Number(num2));
//   };
//   const Multiple = () => {
//     setResult(Number(num1) * Number(num2));
//   };
//   const Divide = () => {
//     setResult(Number(num1) / Number(num2));
//   };
//   const clear = () => {
//     setNum1("");
//     setNum2("");
//     setResult("");
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
//       <br />
//       <br />

//       <input
//         type="number"
//         placeholder="Enter second number"
//         value={num2}
//         onChange={(e) => setNum2(e.target.value)}
//       />
//       <br />

//       <button onClick={add}>Add</button>
//       <br />
//       <button onClick={Sub}>Sub</button>
//       <br />
//       <button onClick={Multiple}>Multiple</button>
//       <br />
//       <button onClick={Divide}>Divide</button>
//       <br />
//       <button onClick={clear}>clear</button>

//       <h2>Result: {result}</h2>
//     </div>
//   );
// };
