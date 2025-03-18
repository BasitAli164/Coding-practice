//! Here we explore, how to handle form in the express
import express from 'express';
import dotenv from 'dotenv';

const app=express();

dotenv.config();
app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}))// this code purpose  is to parse our data which are comes thorugh the url into object format
app.get('/',(req,res)=>{
    res.send("Hi ! I am talking from server 5")
    res.render('form')
})

app.post('/form',(req,res)=>{
    console.log(req.body)
    
})




app.listen(process.env.PORT5,()=>{
    console.log(`Server is running at http://localhost:${process.env.PORT5}`)
})