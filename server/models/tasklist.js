const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  taskDescription: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const tasklist = mongoose.model("tasklist", taskSchema);

module.exports = tasklist;
