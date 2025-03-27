import express from 'express';
import dotenv from 'dotenv';
import dbConnect from '../config/db/dbConnection6';


const app=express();
dotenv.config();




app.get('/',(req,res)=>{
    try {
        res.send("Hi! I am talking from server 15")
        
    } catch (error) {
        console.error("Home page error:",error)
        
    }
})
const port=process.env.PORT15 || 3433;

dbConnect().then(()=>{
    try {
        app.listen(port,()=>{
            console.log(`Server is running at http://localhost:${port}`)
        })

        
    } catch (error) {
        console.error("Server failed to run",error)
        
    }
}).catch((error)=>{
    console.error("Database failed to connect",error)
})