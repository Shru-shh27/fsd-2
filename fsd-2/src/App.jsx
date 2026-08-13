// // // import Studentcomponents from "./components/Studentcomponents";
// // import React, { useState } from "react";
// // import Studentcomponents from "./components/Studentcomponents";
// // import IncrementDecrement from "./components/IncrementDecrement";




// // // // function App() {
// // // //   return (
// // // //     <>
// // // //       {/* <Studentcomponents name="Username1" age={100}>
// // // //         {" "}
// // // //         Middle{" "}
// // // //       </Studentcomponents>

// // // //       <Studentcomponents name="Username2" age={200}>
// // // //         {" "}
// // // //         Middle{" "}
// // // //       </Studentcomponents>
// // // //     </> */}/</>

// // // function App() {
// // // //   let [a,setA]= useState(100);
// // // //  const [b,setB]= useState(200);


// // //   const studentData = [
// // //     {
// // //       name: "Shruti",
// // //       age: 20,
// // //       course: "Computer Science",
// // //     },
// // //     {
// // //       name: "Shreya",
// // //       age: 22,
// // //       course: "Mathematics",
// // //     }

// // //   ] 
// // //   return(
// // //     //use map to render the student data
// // //     <>
// // //       {studentData.map((student) => (
// // //         <Studentcomponents
// // //           name={student.name}
// // //           age={student.age}
// // //           course={student.course}
// // //         >
// // //         </Studentcomponents>
// // //       ))}
// // //     </>

// // //   );
// // // }

// // export default App;

// // import React from "react";
// // import { Calculator } from "./components/Calculator";

// // function App() {
// //   return (
// //     <div>
// //       <Calculator />
// //     </div>
// //   );
// // }

// // export default App;

// // import React from "react";
// // import TodoList from "./components/todolist";

// // function App() {
// //   return (
// //     <div>
// //       <TodoList />
// //     </div>
// //   );
// // }

// // export default App;

// // import React from "react";
// // import StudentCard from "./components/StudentCard"
// // import Header from "./components/Header"
// // import Footer from "./components/Footer"

// // function App(){
// //   return(
// //     <div>
// //       <StudentCard/>
// //       <Header/>
// //       <Footer/>
// //     </div>
// //   );
// // }
// // export default App;

// import React from "react";
// import "./App.css";

// import Header from "./components/Header";
// import Sidebar from "./components/Sidebar";
// import StudentCard from "./components/StudentCard";
// import Footer from "./components/Footer";

// function App() {
//   const students = [
//     {
//       id: 101,
//       name: "Rahul Sharma",
//       course: "B.Tech CSE",
//       semester: "4th",
//       cgpa: "8.7",
//     },
//     {
//       id: 102,
//       name: "Priya Singh",
//       course: "BCA",
//       semester: "3rd",
//       cgpa: "9.1",
//     },
//     {
//       id: 103,
//       name: "Aman Verma",
//       course: "MCA",
//       semester: "2nd",
//       cgpa: "8.9",
//     },
//     {
//       id: 104,
//       name: "Neha Gupta",
//       course: "B.Tech AI",
//       semester: "5th",
//       cgpa: "9.4",
//     },
//   ];

//   return (
//     <div className="container">
//       <Header />

//       <div className="main">
//         <Sidebar />

//         <div className="content">
//           <h2>Student Records</h2>

//           <div className="cards">
//             {students.map((student) => (
//               <StudentCard key={student.id} student={student} />
//             ))}
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// }

// export default App;


// // Rahul Singh
// // 3:07 PM
// // const students = [
// //     {
// //       id: 1, name : "Arshpreet Singh", age: 20 , course: "Computer Science and Engineering", grade: "A"
// //     },
// //     {
// //        id: 2, name : "Rahul Singh", age: 100 , course: "Computer Science and Engineering", grade: "F"
// //     },
// //     {
// //        id: 3, name : "Kunal Dhaliwal", age: 21 , course: "B Pharma", grade: "O+"
// //     },
// //     {
// //        id: 4, name : "Kirandeep Kaur", age: 19 , course: "Bcom", grade: "D"
// //     },
// //     {
// //        id: 5, name : "Vanshika Binani", age: 20 , course: "Computer Science and Engineering", grade: "A"
// //     },
// //     {
// //        id: 6, name : "Ronak", age: 22 , course: "Computer Science and Engineering", grade: "B"
// //     },

// //   ]

// import { Counter } from "./components/Increment/Counter";

// function App(){
//   return (
//     <div style={
//       {
//         display : "flex" , justifyContent : "center" } 
//     }
//         </div>
//   )
// }

// export default App

// import { Form } from "./components/Form/Form";

// function App(){
//   return (
//     <Form/>
//   )
// }

// import {StudentTable} from "./components/Table/StudentTable"

// function App(){
// return(
//     <>
//     <StudentTable/>
//     </>
// )
// }

// export default App


import {Contact} from "./components/Router/Contact";

function App(){
    <Route path ="/" element ={<Home/>}
    <rooute path ="*" eelmnet > never put at top</rooute>
return(
    <>
   
    
    </>
)
}

export default App


