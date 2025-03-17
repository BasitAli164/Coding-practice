//! Here we explore or focus the concept of the middleware in expressjs
import express from 'express'
import dotenv from 'dotenv'


const app=express();
dotenv.config()


//! Types of Middleware

//? 1- Application Level Middleware

app.use((req,res,next)=>{ // this middleware is applied on all middleware
    console.log("A new request accepting  at",+Date.now())
    next()// this middleware run on whole application 
})


app.get('/',(req,res)=>{
    res.send("This is the 3rd server")
})

//? 2-Router Level middleware 
app.use('/welcom',(req,res,next)=>{
    console.log('A new Request at the welcom route at '+Date.now())
    next();

})
app.get('/welcom',(req,res)=>{
    res.send("Welcom to the Express Course/App ⚒️⚒️⚒️⚒️⚒️")
})



app.listen(process.env.PORT3,()=>{
    console.log(`Server is running at http://localhost:${process.env.PORT3}`)

})