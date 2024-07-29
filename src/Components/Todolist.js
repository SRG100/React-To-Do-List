import { useState } from "react";
import Task from "./Task";
import Todonew from "./Todonew";

function Todolist() {
  const [task, setTask] = useState([]);
  const addTask = (todos) => {
    if (todos.trim()) {
      setTask((prevTasks) => [...prevTasks, todos]);
    }
  };

  const deleteTask=(key)=>{
    

  }
  return (
    <div className="Main">

      <h1>To do List</h1>
      <Todonew addTask={addTask} />
      <hr />
      {task.map((taskTodos, i) => (
        <Task key={i} item={taskTodos} />
      ))}
    </div>
  );
}

export default Todolist;
