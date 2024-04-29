/* eslint-disable react/prop-types */
import { useState } from "react";

const TaskItem = ({
  task,
  toggleComplete,
  deleteTask,
  handleEdit,
  handleSave,
}) => {
  const [editedTaskDescription, setEditedTaskDescription] = useState(
    task.taskDescription
  );
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
    handleEdit(task._id, task.taskDescription);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    handleSave(task._id, editedTaskDescription);
  };

  return (
    <tr>
      <td>
        {isEditing ? (
          <input
            type="text"
            className="form-control"
            value={editedTaskDescription}
            onChange={(e) => setEditedTaskDescription(e.target.value)}
          />
        ) : (
          <span
            className={task.completed ? "text-danger" : ""}
            style={{
              textDecoration: task.completed ? "line-through" : "none",
            }}
          >
            {task.taskDescription}
          </span>
        )}
      </td>
      <td>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            checked={task.completed}
            onChange={() => toggleComplete(task._id)}
          />
          <label className="form-check-label">
            {task.completed ? "Completed" : "Pending"}
          </label>
        </div>
      </td>
      <td>
        {isEditing ? (
          <button className="btn btn-success mr-2" onClick={handleSaveClick}>
            Save
          </button>
        ) : (
          <button className="btn btn-warning mr-2" onClick={handleEditClick}>
            Edit
          </button>
        )}
        <button
          className="btn btn-danger mx-3"
          onClick={() => deleteTask(task._id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TaskItem;
