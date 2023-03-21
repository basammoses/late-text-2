import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv";


dotenv.config();

const mongooseUrl = process.env.MONGO_URI





const connectDB = async () => {
  try {
    const conn = await mongoose.connect(mongooseUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
    });
    
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold);
    console.log(mongooseUrl)
    process.exit();
  }
};

export default connectDB;
