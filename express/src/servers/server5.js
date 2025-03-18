//! Here we explore, how to handle form in the express
import express from 'express';
import dotenv from 'dotenv';

const app=express();

dotenv.config();
app.set("view engine", "ejs");//! here i set the view engine as ejs
app.use(express.urlencoded({extended:true}))// this code purpose  is to parse our data which are comes thorugh the url into object format if we don't use this then recive undefined, this is only for string data means through this we cann't give any file datatype like vedios image, and audio etc for that purpose we use third party library like multer
app.get('/',(req,res)=>{
    res.render('form')
    // res.send("Hi ! I am talking from server 5") //! we cann't give double response
})

app.post('/form',(req,res)=>{
    console.log(req.body)
    res.send("Form submitted success fully")
    
})




app.listen(process.env.PORT5,()=>{
    console.log(`Server is running at http://localhost:${process.env.PORT5}`)
})