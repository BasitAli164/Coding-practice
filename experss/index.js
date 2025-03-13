import express from "express";
import { searchController, usernameController } from "./controller.js";
const app = express();

const port = 3000;

// Define a simple route

app.get("/", (req, res) => {
  console.log(req.method);
  res.send(
    "Hello Experss, this is the first response by using express js in backend series"
  );
});
app.get("/about", (req, res) => {
  res.send("This is about page");
});
app.get("/contact", (req, res) => {
  res.send("This is the contact page");
});

// Dynamic Route using params(:)
app.get("/user/:username", usernameController);
// Dynamic Route using Query(?)
app.get("/search", searchController);
app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}`);
});
