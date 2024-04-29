/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://mern-to-do-list-ncrq.onrender.com/tasks"
      );
      setTasks(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (taskInput) => {
    try {
      const response = await axios.post(
        "https://mern-to-do-list-ncrq.onrender.com/tasks",
        {
          taskDescription: taskInput,
        }
      );
      setTasks([...tasks, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleComplete = async (id) => {
    try {
      await axios.patch(
        `https://mern-to-do-list-ncrq.onrender.com/tasks/status/${id}`
      );
      fetchTasks();
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(
        `https://mern-to-do-list-ncrq.onrender.com/tasks/${id}`
      );
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
      await axios.patch(
        `https://mern-to-do-list-ncrq.onrender.com/tasks/${id}`,
        {
          taskDescription: newDescription,
        }
      );
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
      {loading && <div className="text-center">Loading...</div>}
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
