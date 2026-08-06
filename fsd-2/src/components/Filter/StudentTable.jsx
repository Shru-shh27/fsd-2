import React, { useEffect } from "react";
import { useState } from "react";

export const StudentTable = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchStudent();
  }, []);

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase()),
  );

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }
  async function fetchStudent() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div>
      <h1>Student Data Table</h1>
      {/* dont use one way binding beacuse we can't write 
      control input --> two way binding */}
      <input
        type="text"
        placeholder="Search students"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <br />
      <br />

      <table border={1} cellPadding={10} style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {/* <td>1</td>
                <td>Shru</td>
                <td>shru@gmail</td>
                <td>bihar</td> ----> manual define
                filteredStudent. length > 0 ? : */}

          {filteredStudent.length > 0 ? (
            filteredStudent.map((student) => {
              <tr>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.address.city}</td>
              </tr>;
            })
          ) : (
            <tr>
              <td>no student found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
