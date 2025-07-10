//! Here we use the ejs( emmeded javascript files)
import express from "express";
import dotenv from "dotenv";

//? time 1:18 min

const app = express();
dotenv.config();

//? Set EJS as the view engine
app.set("view engine", "ejs"); // here we define our engine

app.get("/", (req, res) => {
  const username = " Basit";
  res.render("index", { username: username });
});

//! Handle the static data like file, image, and audio etc
// 1st Method
// app.use(express.static('public')) //? this help us to fetch static data from image , for this i make the public folder and its uri is http://localhost:3000/fileName

// 2nd Method
app.use('/public',express.static('public')) //? both are same means we can access data by using both technique but the difference is in URI means if we use this option then our uri is                                   http://localhost:3000/folderName/fileName

//! Server Listening

app.listen(process.env.PORT4, () => {
  console.log(`Server is running at http://localhost:${process.env.PORT4}`);
});
