import app from "./app.js"; //importamos app desde app.js
import { connectDB } from "./db.js";

connectDB();//Usa la conexion a la base de datos
app.listen(3000); //Inicia el servidor
console.log("Server on port", 3000);
