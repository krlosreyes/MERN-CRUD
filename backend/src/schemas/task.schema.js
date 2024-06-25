// Importamos los módulos necesarios desde la biblioteca "zod"
import { date, z } from "zod";

// Definimos y exportamos un esquema de validación de datos llamado 'createTaskSchema'
export const createTaskSchema = z.object({
  // Definimos un campo 'title' que debe ser una cadena obligatoria
  // Si el campo 'title' no está presente, se generará un error con el mensaje "Title is required"
  title: z.string({
    required_error: "Title is required",
  }),

  // Definimos un campo 'description' que también debe ser una cadena
  // Si el campo 'description' no está presente, no se generará un error
  description: z.string({
    required_error: "Description is required",
  }),

  // Definimos un campo 'type' que debe ser una cadena obligatoria
  // Si el campo 'type' no está presente, se generará un error con el mensaje "Type is required"
  type: z.string({
    required_error: "Type is required",
  }),

  // Definimos un campo 'date' que debe ser una cadena que represente una fecha y hora, pero es opcional
  // Utilizamos el método 'datetime()' para asegurar que la cadena tiene un formato de fecha y hora válido
  date: z.string().datetime().optional(),
});
