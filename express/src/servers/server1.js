//! Here we concentration about the Basic of the express

import express from "express";
import dotenv from 'dotenv';
import router from "../src/routes/route1.js";

const app = express();
dotenv.config()


//! Define a simple route

// For Home Page
app.get("/", (req, res) => {
  console.log(req.method);
  res.send(
    "Hello Experss, this is the first response by using express js in backend series"
  );
});
// For About 
app.get("/about", (req, res) => {
  res.send("This is about page");
});

// For Contact Page
app.get("/contact", (req, res) => {
  res.send("This is the contact Page");
});

//! server is listening
// app.listen(process.env.PORT1, () => {
//   console.log(`The server is running at http://localhost:${process.env.PORT1}`);
// });
