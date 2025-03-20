//! Here we dealing with form handling(multipart form handling) though third library like multer

import express from 'express';
import dotenv from 'dotenv';
import multer from 'multer'

const app=express();
const upload=multer()
dotenv.config();

app.use(express.static('public'))// this is for fetching static data form public folder
app.use(upload.array())// Here i use the multer functionality and use the array to catch multipart data in it

app.get('/',(req,res)=>{
    res.send("Hi! I am talking from server 6")
})



app.listen(process.env.PORT6,()=>{
    console.log(`Server is runing at http://localhost:${process.env.PORT6}`)
})