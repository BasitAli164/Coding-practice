import express from 'express';
import dotenv from 'dotenv'
import multer from 'multer';
import { upload } from '../utils/multer.js';

const app=express();
dotenv.config();

app.use(upload.single('image'))
app.post('/form',(req,res)=>{
    console.log(req.body)
    console.log(req.file)
})
app.get('/',(req,res)=>{
    res.send("hello, I am talking from server 7")
})

app.listen(process.env.PORT7,(req,res)=>{
    console.log(`Server is runing at http://localhost:${process.env.PORT7}`)
   
})