// TaskPage.js
import React from "react";
import { useTasks } from "../context/TaskContext";
import TaskCard from "../components/TaskCard";

function TaskPage() {
  const { getTasks, tasks, handleEditTask, handleDeleteTask } = useTasks();

  React.useEffect(() => {
    getTasks();
  }, [getTasks]);

  return (
    <div className="bg-black-100 min-h-screen p-4 grid grid-cols-1 md:grid-cols-3  gap-4">
      {/* Columna para tareas diarias */}
      <div className="col-span-1">
        <h2 className="text-lg font-semibold mb-4">Daily Tasks</h2>
        {tasks
          .filter((task) => task.type === "Daily task")
          .map((task) => (
            <TaskCard
              key={task._id}
              task={task}
              handleEditTask={handleEditTask}
              handleDeleteTask={handleDeleteTask}
            />
          ))}
      </div>
      {/* ... */}
      <div className="col-span-1">
        <h2 className="text-lg font-semibold mb-4">Weekly Tasks</h2>
        {tasks
          .filter((task) => task.type === "Weekly task")
          .map((task) => (
            <TaskCard
              key={task._id}
              task={task}
              handleEditTask={handleEditTask}
              handleDeleteTask={handleDeleteTask}
            />
          ))}
      </div>
      {/* ... */}
      <div className="col-span-1">
        <h2 className="text-lg font-semibold mb-4">Monthly Tasks</h2>
        {tasks
          .filter((task) => task.type === "Monthly task")
          .map((task) => (
            <TaskCard
              key={task._id}
              task={task}
              handleEditTask={handleEditTask}
              handleDeleteTask={handleDeleteTask}
            />
          ))}
      </div>
    </div>
  );
}

export default TaskPage;
