import mongoose from "mongoose";

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost:27017/merncrud";

export const connectDB = async () => {
  try {
    await mongoose.connect(mongoUrl, {
      serverSelectionTimeoutMS: 5000, // Ejemplo de opción adicional
    });
    console.log("DataBase OnLine");
  } catch (error) {
    console.log("Error connecting to the database", error);
  }
};
