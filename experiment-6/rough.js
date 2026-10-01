// const express = require('express');
// const app = express();
// const PORT = 8080;

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

// app.get('/', (req, res) => {
//   // res.send('Hello, World!');

//   res.json({
//     message : 'Hello, World!',
//     statuscode : 25
//   })


// });

const express = require('express');
const app = express()
const port = 3000

app.use (express.json())

const students = [
  { id: 1, name: 'John Doe', age: 20 },
  { id: 2, name: 'Jane Smith', age: 22 },
];

app.get('/', (req, res) => {
  // res.json({
  //   message : "Welcome to Express.js!"
  // })
  res.status(200).json({
    message : "Welcome to Express.js!"
  })
})


app.get('/about', (req, res) => {
  res.json({
    message : "This is the about page."
  })
})

app.get('/api/student', (req, res) => {
  res.json({
    message : "This is the student API endpoint.",
    students : students
  })
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.post('/api/student', (req, res) => {
//  const {id , name,age} = req.body;
//  const student = {id,name,age};

students.push(req.body)
console.log(students)
res.json({
  message : "students added",
  students

})
})
