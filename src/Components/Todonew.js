import { useState } from "react";

function Todonew(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    e="";
  };
  const [todos, setTodos] = useState("");

  const handleAddTask = () => {
    props.addTask(todos);
    setTodos(""); // Clear the input field
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="form_input"
        placeholder="Add task for today :)"
        value={todos}
        onChange={(e) => setTodos(e.target.value)}
      />
      <button
        type="submit"
        className="form-btn"
        onClick={handleAddTask}
      >
        Add Task
      </button>
    </form>
  );
}

export default Todonew;
