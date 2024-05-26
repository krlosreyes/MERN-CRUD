import User from "../models/user.model.js"; // Importa el modelo de usuario desde el archivo user.model.js.
import bcrypt from "bcryptjs"; // Importa bcryptjs para realizar operaciones de hash en las contraseñas.
import { createAccessToken } from "../libs/jwt.js"; // Importa la función createAccessToken desde el archivo jwt.js para crear tokens de acceso.

// Creamos las funciones que manejan la lógica de autenticación.

// Función para registrar un nuevo usuario.
export const register = async (req, res) => {
  const { userName, nombre, apellido, email, password } = req.body;
  // Desestructura los datos del cuerpo de la solicitud.

  try {
    const passwordHash = await bcrypt.hash(password, 10); 
    // Encripta la contraseña utilizando bcrypt con un salt de 10.

    const newUser = new User({
      // Crea una nueva instancia del modelo User con los datos proporcionados.
      userName,
      nombre,
      apellido,
      email,
      password: passwordHash,
      // La contraseña se almacena encriptada.
    });

    const userSaved = await newUser.save(); 
    // Guarda el nuevo usuario en la base de datos.

    const token = await createAccessToken({ id: userSaved.id });
    // Crea un token de acceso utilizando la función createAccessToken y el ID del usuario guardado.

    res.cookie("token", token); 
    // Establece una cookie llamada "token" con el token de acceso.

    res.json({
      message: "User created successfully",
      // Devuelve un mensaje de éxito.
    });

    res.json({
      id: userSaved.id,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt,
      // Devuelve los datos del usuario guardado.
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
    // En caso de error, devuelve una respuesta con el estado 500 y el mensaje de error.
  }
};

// Función para iniciar sesión de un usuario existente.
export const login = async (req, res) => {
  const { email, password } = req.body; 
  // Desestructura el correo electrónico y la contraseña del cuerpo de la solicitud.

  try {
    const userFound = await User.findOne({ email }); 
    // Busca un usuario en la base de datos por su correo electrónico.

    if (!userFound) return res.status(400).json({ message: "User not found" }); 
    // Si no encuentra al usuario, devuelve un estado 400 y un mensaje de error.

    const isMatch = await bcrypt.compare(password, userFound.password); 
    // Compara la contraseña proporcionada con la contraseña encriptada almacenada en la base de datos.

    if (!isMatch) return res.status(400).json({ message: "Incorrect password" }); 
    // Si las contraseñas no coinciden, devuelve un estado 400 y un mensaje de error.

    const token = await createAccessToken({ id: userFound.id }); 
    // Crea un token de acceso utilizando el ID del usuario encontrado.

    res.cookie("token", token); 
    // Establece una cookie llamada "token" con el token de acceso.

    res.json({
      id: userFound.id,
      email: userFound.email,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
      // Devuelve los datos del usuario encontrado.
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
    // En caso de error, devuelve una respuesta con el estado 500 y el mensaje de error.
  }
};

// Función para cerrar sesión del usuario.
export const logout = (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
    // Establece una cookie "token" vacía que expira inmediatamente.
  });
  return res.sendStatus(200);
  // Devuelve una respuesta con el estado 200 (OK).
};

// Función para obtener el perfil del usuario.
export const profile = async (req, res) => {
  const userFound = await User.findById(req.user.id);
  // Busca un usuario en la base de datos por su ID.

  if (!userFound) return res.status(400).json({ message: "User not found" });
  // Si no encuentra al usuario, devuelve un estado 400 y un mensaje de error.

  return res.json({
    id: userFound.id,
    username: userFound.userName,
    email: userFound.email,
    createdAt: userFound.createdAt,
    updatedAt: userFound.updatedAt,
    // Devuelve los datos del usuario encontrado.
  });
};

