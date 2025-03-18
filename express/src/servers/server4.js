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

app.use(express.static('public')) // this help us to fetch static data from image , for this i make the public folder

//! Server Listening

app.listen(process.env.PORT4, () => {
  console.log(`Server is running at http://localhost:${process.env.PORT4}`);
});
