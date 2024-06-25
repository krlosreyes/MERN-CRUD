import express from "express"; //importamos express
import morgan from "morgan"; //Importamos morgan
import cookieParser from "cookie-parser"; //Importamos cookie parser para poder leer las cookies "npm i cookie-parser"
import authRoutes from "./routes/auth.routes.js";
import taskRoutes from "./routes/task.routes.js";
import cors from "cors";

const app = express(); //inicializamos el Servidor

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(morgan("dev")); //MOrgan nos permite ver por consola las peticiones que se le hacen al backend
app.use(express.json());
app.use(cookieParser()); //Debe ir antes def las rutas para que funcione correctamente

app.use("/api", authRoutes);
app.use("/api", taskRoutes);

export default app; //Exportamos app para obtenerla en index.js
