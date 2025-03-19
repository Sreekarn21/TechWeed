import mongoose from "mongoose";

const MONGO_URI = process.env.MONGODB_URI; // Ensure the variable name matches

const connectDB = async () => {
  if (!MONGO_URI) {
    throw new Error("MongoDB URI is missing in environment variables!");
  }
  if (mongoose.connections[0].readyState) return;

  await mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("✅ MongoDB Connected");
};

export default connectDB;
