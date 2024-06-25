import jwt from "jsonwebtoken"; // Importa la librería jsonwebtoken para trabajar con JSON Web Tokens.
import { TOKEN_SECRET } from "../config.js"; // Importa la constante TOKEN_SECRET desde el archivo de configuración, que se utiliza para firmar y verificar tokens.

export const authRequired = (req, res, next) => {
  // Define una función middleware llamada authRequired.
  
  const { token } = req.cookies;
  // Desestructura el token de las cookies del objeto req (la solicitud).

  if (!token) {
    // Si no hay token en las cookies, devuelve una respuesta con un estado 401 (No autorizado) y un mensaje de error en formato JSON.
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(token, TOKEN_SECRET, (err, user) => {
    // Verifica el token utilizando jwt.verify, que toma el token, la clave secreta (TOKEN_SECRET) y una función de callback.
    
    if (err) {
      // Si hay un error durante la verificación (por ejemplo, si el token es inválido o ha expirado), devuelve una respuesta con un estado 403 (Prohibido) y un mensaje de error en formato JSON.
      return res.status(403).json({ message: "Invalid Token" });
    }
    
    req.user = user;
    // Si el token es válido, se decodifica y se almacena en req.user. Esta información puede ser utilizada posteriormente en otras rutas o middleware.

    console.log(req.user.id);
    // Imprime en la consola el ID del usuario decodificado desde el token.

    next();
    // Llama a next() para pasar el control al siguiente middleware en la cadena de procesamiento.
  });
};
