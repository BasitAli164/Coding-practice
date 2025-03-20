//! Here we dealing with form handling(multipart form handling) though third library like multer

import express from 'express';
import dotenv from 'dotenv';

const app=express();
dotenv.config();
app.use(express.static('public'))
app.get('/',(req,res)=>{
    res.send("Hi! I am talking from server 6")
})



app.listen(process.env.PORT6,()=>{
    console.log(`Server is runing at http://localhost:${process.env.PORT6}`)
})