//! Here we are dealing with different type of routes

import express from 'express'
import dotenv from 'dotenv'
import { searchController, userLogin, usernameController, userRegister } from "../src/controller/controller1.js";


const app=express();
dotenv.config()


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

//?  multiple route parameter(multiple params in url)
app.get('/things/:name/:id',(req,res)=>{
    const {name,id}=req.params;
    res.json({
        message:"Get Data from URL ",
        id,
        name
    })

})

//? Using regx in url with params 
app.get('/product/:name/:id([0-9]{5})',(req,res)=>{ // Here i use regx and this regx work is if id should be 5 digit and must be a number , if don't provide then we get error
    const {name,id}=req.params;
    res.json({
        message:"Get Data form URL",
        id,
        name
    })

})
//? Catch all invalid route
app.get('*',(req,res)=>{
    res.send("Sorry this is an invalid url")
})


//! Server is Listening
// app.listen(process.env.PORT2,()=>{
//     console.log(`Server is listening at http://localhost:${process.env.PORT2}`)
// })