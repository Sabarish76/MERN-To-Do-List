/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTaskId, setEditingTaskId] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addTask = async (taskInput) => {
    try {
      const response = await axios.post("http://localhost:5000/tasks", {
        taskDescription: taskInput,
      });
      setTasks([...tasks, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleComplete = async (id) => {
    try {
      await axios.patch(`http://localhost:5000/tasks/status/${id}`);
      fetchTasks();
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/tasks/${id}`);
      fetchTasks();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (id) => {
    setEditingTaskId(id);
  };

  const handleSave = async (id, newDescription) => {
    try {
      await axios.patch(`http://localhost:5000/tasks/${id}`, {
        taskDescription: newDescription,
      });
      setEditingTaskId(null);
      console.log(editingTaskId);
      fetchTasks();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Todo List</h1>
      <TaskInput addTask={addTask} />
      <TaskList
        tasks={tasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
        handleEdit={handleEdit}
        handleSave={handleSave}
      />
    </div>
  );
};

export default TodoList;
