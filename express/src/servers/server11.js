import express from 'express';
import dotenv from 'dotenv';
import dbConnect from '../../config/db/dbConnection4.js'


const app=express();
dotenv.config();


app.get('/',(req,res)=>{
    res.send('I am talking form the server 11')
})


const port=process.env.PORT11 ||4343

dbConnect().then(()=>{
    app.listen(port,()=>{
        console.log(`Server is running at http://localhost:${port}`)
    })
}).catch((error)=>{
    console.error('Database connection error:',error)
})