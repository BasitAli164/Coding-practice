import express from "express";
import dotenv from "dotenv";
import dbConnect from "../../config/db/dbConnection4.js";
import { User } from "../models/user.models.js";

const app = express();
dotenv.config();

app.use(express.json()); //! this is used to parse the data
app.get("/", (req, res) => {
  res.send("I am talking form the server 11");
});

app.post("/adduser", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newData = new User({
      //! First crate instance then we save that
      userName: name, // the name give from frontend but in backend i handle for this i use usrname so i write like above
      email,
      password,
    });
    await newData.save(); //! here we are saving the created instance

    res.json({
      message: "User Add Successfully....",
      newData,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});

app.put("/", (req, res) => {});

const port = process.env.PORT11 || 4343;

dbConnect()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });
