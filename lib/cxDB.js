import mongoose from "mongoose";

const conexionBD = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(
        process.env.MONGODB_URI,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        },
      );
      console.log("Base conectada");
    }
  } catch (error) {
    console.log(error);
  }
};

export default conexionBD;
