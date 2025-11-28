import mongoose from "mongoose";

export const startDB = async () => {
  try {
    await mongoose.connect(
      `mongodb://127.0.0.1:27017/${process.env.MONGODB_URI}`
    );
    // await mongoose.connection.dropDatabase();
    console.log("Base de datos conectada");
  } catch (err) {
    console.error("Error al conectar con la base de datos", err);
  }
};