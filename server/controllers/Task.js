const tasklist = require("../models/tasklist");

const getTasks = async (req, res) => {
  try {
    const taskList = await tasklist.find();
    res.status(200).json(taskList);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createTask = async (req, res) => {
  const { taskDescription } = req.body;
  const todo = new tasklist({
    taskDescription,
    completed: false,
  });
  try {
    const savedTodo = await todo.save();
    res.json(savedTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateStatus = async (req, res) => {
  try {
    const todo = await tasklist.findById(req.params.id);
    todo.completed = !todo.completed;
    const updatedTodo = await todo.save();
    res.json(updatedTodo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { taskDescription } = req.body;

    const updatedTask = await tasklist.findByIdAndUpdate(
      id,
      { taskDescription },
      { new: true }
    );
    res.json(updatedTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    await tasklist.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getTasks, createTask, updateStatus, deleteTask, updateTask };
