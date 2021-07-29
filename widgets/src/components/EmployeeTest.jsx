import React, { useEffect, useState } from "react";
import { fetchStudents } from "./Services/Employee/fecthStudents";
import { insertStudent } from "./Services/Employee/InsertStudent";

export function EmployeeTest() {
  const [todoList, setTodoList] = useState([]);
  const [nameInput, setNameInput] = useState("");
  const [idInput, setIdInput] = useState(0);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const result = await fetchStudents();
    setTodoList(result);
  };

  const handleClick = () => {
    const insertData = async () => {
      try {
        const result = await insertStudent({
          name: nameInput,
          id: idInput,
        });
        getData();
      } catch (err) {
        console.error("error inserting student", err);
      }
    };
    insertData();
  };

  return (
    <div>
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>{todo.name}</li>
        ))}
      </ul>
      <input
        type="text"
        value={nameInput}
        onChange={(e) => setNameInput(e.target.value)}
      />
      <input
        type="number"
        value={idInput}
        onChange={(e) => setIdInput(e.target.value)}
      />
      <button type="submit" onClick={handleClick}>
        Add
      </button>
    </div>
  );
}
