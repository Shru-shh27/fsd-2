import { useState, useEffect } from "react";

export const Testing = () => {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

//   useEffect((){

// fetch("https://jsonplaceholder.typicode.com/users")

// .then(response => response.json())

// .then(data => setStudent(data))

// .catch(err => console.log("Error: ", error))

// }, []);

  async function fetchUsers() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const data = await response.json();
      setStudent(data);
    } catch (error) {
      console.log("Error:", error);
    }
  }

  return (
    <div>
      <h2>Users List</h2>

      <ol>
        {student.map((studentInfo) => (
          <li key={studentInfo.id}>
            <h3>{studentInfo.name}</h3>
            <p>{studentInfo.email}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};