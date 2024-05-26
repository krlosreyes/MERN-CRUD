import mongoose from "mongoose"; //importamos mongoose

export const connectDB = async () => {
  //exportamos la funcion que es asincrona
  try {
    await mongoose.connect("mongodb://localhost/merncrud"); //conexion a la base de datos
    console.log("DataBase OnLine");
  } catch (error) {
    console.log(error); //mensaje de error
  }
};
