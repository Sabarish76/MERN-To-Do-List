/* eslint-disable react/prop-types */
import TaskItem from "./TaskItem";

const TaskList = ({
  tasks,
  toggleComplete,
  deleteTask,
  handleEdit,
  handleSave,
}) => {
  return (
    <div className="table-responsive">
      <table className="table table-bordered table-striped text-center">
        <thead className="thead-dark">
          <tr>
            <th>Task</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <TaskItem
              key={task._id}
              task={task}
              toggleComplete={toggleComplete}
              deleteTask={deleteTask}
              handleEdit={handleEdit}
              handleSave={handleSave}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
