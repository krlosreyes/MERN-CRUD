import { z } from "zod";

// Definición del esquema de validación para el registro de usuarios.
export const registerSchema = z.object({
  // Campo 'userName' de tipo string, con un mensaje de error personalizado si falta.
  userName: z.string({
    required_error: "Username is required",
  }),
  // Campo 'nombre' de tipo string, con un mensaje de error personalizado si falta.
  nombre: z.string({
    required_error: "nombre is required",
  }),
  // Campo 'apellido' de tipo string, con un mensaje de error personalizado si falta.
  apellido: z.string({
    required_error: "Apellido is required",
  }),
  // Campo 'email' de tipo string, con validación de formato de correo electrónico y mensajes de error personalizados.
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      message: "Invalid Email",
    }),
  // Campo 'password' de tipo string, con validación de longitud mínima y mensajes de error personalizados.
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, {
      message: "Password must be at least 6 characters",
    }),
});

// Definición del esquema de validación para el inicio de sesión de usuarios.
export const loginSchema = z.object({
  // Campo 'email' de tipo string, con validación de formato de correo electrónico y mensajes de error personalizados.
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      message: "Invalid Email",
    }),
  // Campo 'password' de tipo string, con validación de longitud mínima y mensajes de error personalizados.
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, {
      message: "Password must be at least 6 characters",
    }),
});
