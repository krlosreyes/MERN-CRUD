import Task from "../models/task.model.js"; // Importa el modelo Task desde la ruta especificada

// Controlador para obtener todas las tareas
export const getTasks = async (req, res) => {
  const tasks = await Task.find({
    user: req.user.id,
  }).populate("user"); // Busca todas las tareas en la base de datos
  res.json(tasks); // Envía las tareas como respuesta en formato JSON
};

// Controlador para crear una nueva tarea
export const createTask = async (req, res) => {
  const { title, description, type, date } = req.body; // Extrae los campos del cuerpo de la solicitud
  const newTask = new Task({
    title,
    description,
    type,
    date,
    user: req.user.id,
  }); // Crea una nueva instancia de Task con los datos proporcionados
  const savedTask = await newTask.save(); // Guarda la nueva tarea en la base de datos
  res.json(savedTask); // Envía la tarea guardada como respuesta en formato JSON
};

// Controlador para obtener una tarea por su ID
export const getTask = async (req, res) => {
  const task = await Task.findById(req.params.id); // Busca la tarea por ID en la base de datos
  if (!task) return res.status(404).json({ message: "Task not found" }); // Si no se encuentra, responde con un error 404
  res.json(task); // Si se encuentra, envía la tarea como respuesta en formato JSON
};

// Controlador para eliminar una tarea por su ID
export const deleteTask = async (req, res) => {
  const task = await Task.findByIdAndDelete(req.params.id); // Busca y elimina la tarea por ID
  if (!task) return res.status(404).json({ message: "Task not found" }); // Si no se encuentra, responde con un error 404
  return res.sendStatus(204); // Si se elimina, envía la tarea eliminada como respuesta en formato JSON
};

// Controlador para actualizar una tarea por su ID
export const updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true, // Opción para devolver la tarea actualizada en lugar de la original
  }); // Actualiza la tarea con los datos proporcionados en el cuerpo de la solicitud
  if (!task) return res.status(404).json({ message: "Task not found" }); // Si no se encuentra, responde con un error 404
  res.json(task); // Si se actualiza, envía la tarea actualizada como respuesta en formato JSON
};
