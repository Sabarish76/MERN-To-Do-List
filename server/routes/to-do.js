const express = require("express");
const router = express.Router();
const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  updateStatus,
} = require("../controllers/Task");

router.get("/", getTasks);
router.post("/", createTask);
router.patch("/status/:id", updateStatus);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
