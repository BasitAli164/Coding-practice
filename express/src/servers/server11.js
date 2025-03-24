import express from "express";
import dotenv from "dotenv";
import dbConnect from "../config/db/dbConnection4.js";
import { User } from "../models/user.models.js";

const app = express();
dotenv.config();

app.use(express.json()); //! this is used to parse the data
app.get("/", (req, res) => {
  res.send("I am talking form the server 11");
});

app.post("/adduser", async (req, res) => {
  try {
    const { name, email, password,orders } = req.body;
    const newData = new User({
      //! First crate instance then we save that
      userName: name, // the name give from frontend but in backend i handle for this i use usrname so i write like above
      email,
      password,
      userOrder:orders
    });
    await newData.save(); //! here we are saving the created instance

    res.status(201).json({
      message: "User Add Successfully....",
      newData,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});

app.put("/updateuser", async (req, res) => {
  try {
    const { id } = req.body; //? we are trying to update the exiting data or document through id
    const updatedData = await User.findByIdAndUpdate(id, {
      userName: "King Ali",
    }); // here we find first the existing data through its id and update the userName
    await updatedData.save(); // here save after updating

    res.status(200).json({ message: "User Updated Successfully", updatedData });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});

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
