//! Here we explore the Authentication process in ExpressJS

//? We can handle the authentication in express through tow method
// 1. Session-Based Authentication (Use cookies and session)
// 2. Token-Based Authentication (Use JWT or OAuth tokens)
import express from "express";
import dotenv from "dotenv";
import dbConnect from "../config/db/dbConnection5.js";
import cookieParser from "cookie-parser";
import session from "express-session";
const app = express();
dotenv.config();
const users = []; // this is used for emulated data

//? Middlewares
// We required these middleware for authentication proccess
app.use(cookieParser());
app.use(
  session({
    secret: "secret-api",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(express.json())// this middleware use to parser the data in a understanding format

app.get("/", (req, res) => {
  try {
    res.send("Hi! I am talking from server 14");
    console.log("I am talking from server 14");
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error });
  }
});

app.post("/register", async (req, res) => {
  try {
    const {username,password}=await req.body;
    console.log("username:",username, "password",password)

    users.push({
      username,
      password,
    });
    res.status(201).json({ message: "User successfully register" });
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Internal Server Error", error: error });
  }
});
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = users.find((user) => user.username === username);
    if (!username || password !== user.password) {
      return res
        .status(404)
        .json({ message: "No found any user base of the given credientails" });
    }
    req.session.user = user;

    res.status(200).json({ message: "User Login Successfully.." });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error });
  }
});

app.get("/dashboard", (req, res) => {
  try {
    if (!req.session.user) {
      return res
        .status(404)
        .json({ message: "Not found any user! Please register first" });
    }
    res.status(200).json({ message: `Welcome, ${req.session.user.username}` });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
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
