import express from 'express';
import dotenv from 'dotenv';

const app=express();
dotenv.config();

app.get('/',(req,res)=>{
    res.send("Hi ! I am talking from server 5")
})





app.listen(process.env.PORT5,()=>{
    console.log(`Server is running at http://localhost:${process.env.PORT5}`)
})