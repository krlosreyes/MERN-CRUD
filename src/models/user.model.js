import mongoose from "mongoose";

const userSchema = new mongoose.Schema({//definimos el modelo de usuario a guardar
  userName: {
    type: String,
    required: true,
    trim: true,
  },
  nombre: {
    type: String,
  },
  apellido: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
},
{
  timestamps: true
});

export default mongoose.model("User", userSchema);//Exportamos el modelo para poder trabajar con el
