import express from 'express';
import dotenv from 'dotenv';


const app=express();
dotenv.config();


app.get('/',(req,res)=>{
    res.send("I am talking from server 12")
})

const port=process.env.PORT12||3343;



app.listen(port,()=>{
    console.log(`Sever is running at http://localhost:${port}`)
})