import express from "express";
import { searchController, userLogin, usernameController, userRegister } from "./controller.js";
import router from "./route.js";
const app = express();

const port = 3000;

//! Define a simple route

// For Home Page
app.get("/", (req, res) => {
  console.log(req.method);
  res.send(
    "Hello Experss, this is the first response by using express js in backend series"
  );
});
// For About {age
app.get("/about", (req, res) => {
  res.send("This is about page");
});

// For Contact Page
app.get("/contact", (req, res) => {
  res.send("This is the contact Page");
});

//! Dynamic Route

app.get("/user/:username", usernameController);// Dynamic Route using params(:)

app.get("/search", searchController);// Dynamic Route using Query(?)


//! User Login and Register Route
//  app.get('/admin/login',userLogin)
//  app.get('/admin/register',userRegister)

 //? Customize the above routes
 app.use('/admin',router)




 //? Create POST route first time
 app.post('/admin',express.json(),(req,res)=>{ // here we pass a middleware which is express.json()
    const {name,email}=req.body
    res.json({
        message:`Admin ${name} with email ${email} created successfully`
    })

 })

 //? Create PUT route first time
 
//! server is listening
app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}`);
});
