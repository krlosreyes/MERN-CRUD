import { Router } from "express"; // Importamos Router desde express para crear un manejador de rutas modular.
import {
  register,
  login,
  logout,
  profile,
  verifyToken,
} from "../controllers/auth.controller.js"; // Importamos las funciones de controlador desde el archivo auth.controller.js.
import { authRequired } from "../middlewares/validateToken.js"; // Importamos el middleware authRequired desde el archivo validateToken.js.
import { validateSchema } from "../middlewares/validator.middleware.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";
import { verifyTokenRequest } from "../../client/src/api/auth.js";

const router = Router(); // Inicializamos un nuevo objeto Router.

// Definición de las rutas y asignación de los controladores correspondientes.
// Cada ruta se asocia con una función específica del controlador y algunas rutas utilizan middleware adicional.

// Ruta para registrar un nuevo usuario.
router.post("/register", validateSchema(registerSchema), register);
// Se ejecuta cuando se realiza una solicitud POST a "/register".
// Llama a la función register del controlador de autenticación.

// Ruta para iniciar sesión.
router.post("/login", validateSchema(loginSchema), login);
// Se ejecuta cuando se realiza una solicitud POST a "/login".
// Llama a la función login del controlador de autenticación.

// Ruta para cerrar sesión.
router.post("/logout", logout);
// Se ejecuta cuando se realiza una solicitud POST a "/logout".
// Llama a la función logout del controlador de autenticación.

router.get("/verify", verifyToken);
// Ruta para obtener el perfil del usuario.
// Utiliza el middleware authRequired para verificar que el usuario está autenticado antes de permitir el acceso al perfil.
router.get("/profile", authRequired, profile);
// Se ejecuta cuando se realiza una solicitud GET a "/profile".
// Primero ejecuta el middleware authRequired para verificar el token de autenticación.
// Si la verificación es exitosa, llama a la función profile del controlador de autenticación.

export default router;
// Exportamos el router para que pueda ser utilizado en otras partes de la aplicación.
