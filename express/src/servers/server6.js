//! Here we dealing with form handling(multipart form handling) though third library like multer

import express from 'express';
import dotenv from 'dotenv';
import multer from 'multer'

const app=express();
const upload=multer()
dotenv.config();

app.use(express.static('public'))// this is for fetching static data form public folder
// app.use(upload.array())//? Here i use the multer functionality and use the array to catch multipart data in it
app.use(upload.single('image'))// here we must be give te field name if we are using the single property , 


app.get('/',(req,res)=>{
    res.send("Hi! I am talking from server 6")
})

app.post('/form',(req,res)=>{
    console.log(req.body)
    console.log(req.file) // this give me buffer data
    res.send("Successfully!")
})


app.listen(process.env.PORT6,()=>{
    console.log(`Server is runing at http://localhost:${process.env.PORT6}`)
})