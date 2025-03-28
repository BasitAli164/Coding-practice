import express from 'express';
import dotenv from 'dotenv';
import dbConnect from '../config/db/dbConnection7';




const app=express();
dotenv.config();


const port=process.env.PORT17 || 3433
dbConnect().then(()=>{
    app.listen(port,()=>{
        console.log(`Server is running at http://localhost:${port}`)
    })

})