//! Here we study about cookies related topics and used third party library to manage cookie which is cookie parser
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';


const app=express();
dotenv.config();


app.get('/',(req,res)=>{
    res.send("I am talking from server 12")
})

const port=process.env.PORT12||3343;



app.listen(port,()=>{
    console.log(`Sever is running at http://localhost:${port}`)
})