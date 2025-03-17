import express from 'express';

const app=express();







//! Server Listening

app.listen(process.env.PORT4,()=>{
    console.log(`Server is runngin at ${process.env.PORT4}`)
})