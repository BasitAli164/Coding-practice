import express from 'express';
import dotenv from 'dotenv';
import dbConnection2 from '../../config/db/dbConnection2.js';


const app=express();
dotenv.config();

app.get('/',(req,res)=>{
    res.send("I am talking from server 9")
})
const port=process.env.PORT9 || 4433;


dbConnection2().then(()=>{
    app.listen(port,()=>{
        console.log(`Server is running at http://localhost:${port}`)
        
    })
}).catch((err)=>{
    console.error(`Sever failed to start because the reason are this error: ${err}`)
})