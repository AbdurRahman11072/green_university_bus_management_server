import mongoose from "mongoose";
import { config } from "../config";

export const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(config.DB_URL as string);
    console.log(
      `MongoDB connection successful.\nHost: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log(`error: ${error}`);
  }
};
