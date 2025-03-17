//! Here we use the ejs( emmeded javascript files)
import express from "express";
import dotenv from 'dotenv';


//? time 1:18 min

const app = express();
dotenv.config()


//? Set EJS as the view engine
app.set('view engine','ejs') // here we define our engine


app.get("/", (req, res) => {
  const username="Khatija Batool"
  res.render('index',{username:username})
});

//! Server Listening

app.listen(process.env.PORT4,()=>{
    console.log(`Server is running at http://localhost:${process.env.PORT4}`)
})