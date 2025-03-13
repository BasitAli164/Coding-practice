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
 app.post('/admin',express.json(),(req,res)=>{ //! here we pass a middleware which is express.json(), this middleware convert the json formated body data and parse it in object and it will be added in request body
    const {name,email}=req.body
    res.json({
        message:`Admin ${name} with email ${email} created successfully`
    })

 })

 app.use(express.json()) // This is to keep clear the route means we don't require to put express.json() in each route like above
 //? Create PUT route first time
 app.put('/admin/:id',(req,res)=>{ // here we don't put express.json() middleware because we handle it in above line no 53
    const adminId=req.params.id;
    const  {name,email}=req.body
    res.json({
        message:`Admin ${adminId} updated to ${name} and ${email}`
    })
 })
 app.get('/admin/:id',(req,res)=>{// here we don't put express.json() middleware because we handle it in above line no 53
    const adminId=req.params.id
    const {name,email}=req.body
    res.json({
        message:`Admin detail with this Id ${adminId} Name: ${name}  Email: ${email}`
    })
 })

 //? Create DELETE route first time
 app.delete("/admin/:id",(req,res)=>{
    const adminId=req.params.id
    res.json({
        message:`Admin with ID ${adminId} deleted Successfully`
    })
 })
//! server is listening
app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}`);
});
