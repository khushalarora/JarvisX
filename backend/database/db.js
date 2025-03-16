import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.dbURL, {
      dbName: "JarvisX",
    });

    console.log("DB connected !");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;