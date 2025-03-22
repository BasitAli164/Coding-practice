import express from 'express';
import dotenv from 'dotenv';
import dbConnection  from '../../config/db/dbConnection1.js';

const app=express();
dotenv.config();


app.get('/',(req,res)=>{
    res.send("Talking from server 7")
})

const port=process.env.PORT7|| 4545;

    dbConnection().then(()=>{
        app.listen(port,()=>{
            console.log(`Server is running at http://localhost:${port}`)
          
        })
    }).catch((err)=>{
        console.log(`DB connection error ${err}`);
        
    })