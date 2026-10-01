const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

let students = [
  { id: 1, name: 'John Doe', age: 20 },
  { id: 2, name: 'Jane Smith', age: 22 },
];

app.get('/api/students', (req, res) => {
  res.status(200).json({
    message: 'List of students',
    students: students,
  });
});


app.get('/api/students/:id', (req, res) => {
    const student = students.find(s=> s.id === parseInt(req.params.id));
    if(!student){
        return res.status(404).json({
            message : "Student not found"
        })  
    }
    else{
       return  res.status(200).json({
            message : "Student found",
            student : student
        })
    }
})
