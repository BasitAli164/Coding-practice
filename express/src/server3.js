//! Here we explore the concept of the middleware in expressjs
import express from 'express'

const app=express();

app.listen(process.env.PORT3,()=>{
    console.log(`Server is running at http://localhost:${process.env.PORT3}`)

})