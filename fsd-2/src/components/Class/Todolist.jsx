// import React, { useState } from "react";

// const TodoList = () => {
//   const [task, setTask] = useState("");
//   const [tasks, setTasks] = useState([]);

//   const add = () => {
//     if (task.trim() === "") return;
//     setTasks([...tasks, task]);
//     setTask("");
//   };

//   const clear = () => {
//     setTasks([]);
//   };

//   return (
//     <div>
//       <h1>TO DO LIST</h1>

//       <input
//         type="text"
//         placeholder="Enter your task"
//         value={task}
//         onChange={(e) => setTask(e.target.value)}
//       />

//       <br />
//       <br />

//       <button onClick={add}>Add</button>

//       <br />
//       <br />

//       <button onClick={clear}>Clear</button>

//       <h2>Tasks</h2>

//       <ul>
//         {tasks.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TodoList;