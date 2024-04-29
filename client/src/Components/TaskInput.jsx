/* eslint-disable react/prop-types */
import { useState } from "react";

const TaskInput = ({ addTask }) => {
  const [taskInput, setTaskInput] = useState("");

  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask(taskInput);
      setTaskInput("");
    }
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Enter task"
        value={taskInput}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <div className="input-group-append">
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => addTask(taskInput)}
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default TaskInput;
