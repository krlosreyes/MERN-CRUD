/* eslint-disable react/prop-types */
// TaskCard.js
import { useTasks } from "../context/TaskContext";

function TaskCard({ task }) {

    const { deleteTask } = useTasks()
  // Función para obtener el color de fondo basado en el tipo de tarea
  const getBackgroundColor = (type) => {
    switch (type) {
      case "Daily task":
        return "bg-indigo-200"; // Color para tareas diarias
      case "Weekly task":
        return "bg-orange-300"; // Color para tareas semanales
      case "Monthly task":
        return "bg-emerald-500"; // Color para tareas mensuales
      default:
        return "bg-gray-200"; // Color por defecto
    }
  };

  // Usar la función para obtener la clase de color
  // eslint-disable-next-line react/prop-types
  const bgColorClass = getBackgroundColor(task.type);

  return (
    <div className={`${bgColorClass} p-4 rounded shadow-md mb-4`}>
      <header className="flex justify-between">
        <h3 className="text-gray-900 text-md font-medium">{task.title}</h3>
        <div className="mt-2 flex space-x-2">
          <button  className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
            onClick={() =>{
              window.location.href = `/task/${task._id}`;
            }}>
            Edit
          </button>
          <button
            onClick={() => {
              deleteTask(task._id);
            }}
            className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </header>
      <p className="text-gray-700">{task.description}</p>
      <p className="text-black">{new Date(task.date).toLocaleDateString()}</p>
    </div>
  );
}

export default TaskCard;
