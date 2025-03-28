import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.URI || "");
    console.log("Database connected successfully!");
  } catch (error) {
    console.error("Data connection error:", error);
  }
  mongoose.connection.on("Error", () => {
    console.error("Database failed to connect");
    process.exit(1);
  });
};

export default dbConnect;
