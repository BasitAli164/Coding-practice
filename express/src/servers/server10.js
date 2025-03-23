import express from 'express';
import dotenv from 'dotenv';
import dbConnection3 from '../../config/db/dbConnection3.js';

const app=express();
dotenv.config();


app.get('/',(req,res)=>{
    res.send("I am talking from the server 10")
})

const port=process.env.PORT10 || 4332;

dbConnection3().then(()=>{
    app.listen(port, ()=>{
        console.log(`Server runing at http://localhost:${port}`)
    })
}).catch((error)=>{
    console.error(`Server failed to connect , due to this error ${error}`)
})