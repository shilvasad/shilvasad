import mongoose from "mongoose";
import { MONGO_URI } from "./env.js";
const DB = {
  connect: async () => {
    console.log(`\t Connecting to MongoDB with URI ${MONGO_URI}`);
    try {
      await mongoose.connect(MONGO_URI);
      console.log(`\t MongoDB connected successfully`);
    } catch (error) {
      console.error(`\t Error connecting to MongoDB: ${error}`);
      throw error;
    }
  },
};

export default DB;
