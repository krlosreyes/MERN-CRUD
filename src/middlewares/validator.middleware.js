// Función de middleware para validar esquemas utilizando Zod.
export const validateSchema = (schema) => (req, res, next) => {
  try {
    // Intenta validar el cuerpo de la solicitud (req.body) contra el esquema proporcionado.
    schema.parse(req.body);
    // Si la validación es exitosa, pasa al siguiente middleware o controlador.
    next();
  } catch (error) {
    // Si hay un error de validación, devuelve una respuesta con un estado 400 y el error.
    return res
      .status(400)
      .json({ error: error.errors.map((error) => error.message) });
  }
};
