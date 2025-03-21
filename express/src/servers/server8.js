import express from 'express';
import dotenv from 'dotenv';
import dbConnection  from '../../config/db/dbConnection.js';

const app=express();
dotenv.config();


app.get('/',(req,res)=>{
    res.send("Talking from server 7")
})





app.listen(process.env.PORT8,()=>{
    console.log(`Server is running at http://localhost:3007`)
    dbConnection()
})