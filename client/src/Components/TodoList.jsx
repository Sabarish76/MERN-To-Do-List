import React, { useEffect, useState } from "react";
import axios from "axios";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/tasks");
      setTasks(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return <div>TodoList</div>;
};

export default TodoList;
