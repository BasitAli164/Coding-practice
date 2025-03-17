//! Here we explore or focus the concept of the middleware in expressjs
import express from 'express'
import dotenv from 'dotenv'


const app=express();
dotenv.config()


//! Types of Middleware

//? 1- Application Level Middleware

app.use((req,res,next)=>{
    console.log("A new request accepting  at",+Date.now())
    next()// this middleware run on whole application 
})

app.get('/',(req,res)=>{
    res.send("This is the 3rd server")
})
app.listen(process.env.PORT3,()=>{
    console.log(`Server is running at http://localhost:${process.env.PORT3}`)

})