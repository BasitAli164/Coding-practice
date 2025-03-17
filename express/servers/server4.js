import express from "express";
import dotenv from 'dotenv';



const app = express();
dotenv.config()
app.get("/", (req, res) => {
  res.send("I am talking from Server Four");
});

//! Server Listening

app.listen(process.env.PORT4,()=>{
    console.log(`Server is running at http://localhost:${process.env.PORT4}`)
})