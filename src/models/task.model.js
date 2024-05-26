import mongoose from "mongoose";

// Definición del esquema para la colección de 'tasks' en MongoDB.
const taskSchema = new mongoose.Schema(
  {
    // Campo 'title' de tipo String. Este campo es requerido.
    title: {
      type: String,
      required: true,
    },
    // Campo 'description' de tipo String. Este campo es requerido.
    description: {
      type: String,
      required: true,
    },
    // Campo 'type' de tipo String. Este campo es requerido.
    type: {
      type: String,
      required: true,
    },
    // Campo 'date' de tipo Date. Este campo tiene un valor por defecto igual a la fecha y hora actual.
    date: {
      type: Date,
      default: Date.now,
    },
    // Campo 'user' que referencia a un documento en la colección 'User'. Este campo es requerido.
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    // Configuración adicional del esquema para habilitar timestamps.
    // Esto agrega automáticamente campos 'createdAt' y 'updatedAt' a los documentos.
    timestamps: true,
  }
);

// Creación del modelo 'Task' utilizando el esquema definido anteriormente.
// Esto permitirá realizar operaciones de base de datos sobre la colección 'tasks'.
export default mongoose.model("Task", taskSchema);
