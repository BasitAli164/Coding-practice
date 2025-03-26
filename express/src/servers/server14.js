//! Here we explore the Authentication process in ExpressJS

//? We can handle the authentication in express through tow method
// 1. Session-Based Authentication (Use cookies and session)
// 2. Token-Based Authentication (Use JWT or OAuth tokens)
import express from "express";
import dotenv from "dotenv";
import dbConnect from "../config/db/dbConnection5.js";

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  try {
    console.log("I am talking from server 14");
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error });
  }
});

const port = process.env.PORT14 || 4343;
dbConnect().then(() => {
  try {
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Database connection failed:", error);
  }
});
