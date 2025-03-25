import express from 'express';
import dotenv from 'dotenv';



const app=express();
dotenv.config();



app.get('/',(req,res)=>{
    res.send('Hi! I am talking from server 13')
})
const port=process.env.PORT13 || 3434;

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`)
})