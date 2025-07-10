//! Here we explore or focus the concept of the middleware in expressjs
import express from 'express'
import dotenv from 'dotenv'


const app=express();
dotenv.config()


//! Types of Middleware


//? 1- Application Level Middleware

// Middleware
app.use((req,res,next)=>{ // this middleware is applied on all middleware
    console.log("A new request accepting  at",+Date.now())
    console.log("Start")
    res.on('finish',()=>{

       setTimeout(() => {
        console.log("End")
        
       }, 3000);
    })
    next()// this middleware run on whole application 
})

// exmaple
app.get('/',(req,res)=>{
    setTimeout(()=>{
        console.log("middle")
    res.send("This is the 3rd server")
    },3000)
})

//? 2-Router Level middleware 
// Middleware
app.use('/welcom',(req,res,next)=>{
    console.log('A new Request at the welcom route at '+Date.now())
    next();

})
// exmaple
app.get('/welcom',(req,res)=>{
    res.send("Welcom to the Express Course/App ⚒️⚒️⚒️⚒️⚒️")
})


//? 3-Built-in middleware
//  e.g: express.json() is a built-in middleware which i use in server2 in detail see there


//? 4- Third-party middleware
// These are the third party middleware which are cors(), body-parser()
//? 5-Error-Handling middleware

// exmaple:

app.get('/error',()=>{
    throw new Error('This is the new error')
})
// Middleware and it useage is up ⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️
app.use((err,req,res,next)=>{
    console.error(err.message)
    res.send("Internal Server Error")

})

//! Server is listening
// app.listen(process.env.PORT3,()=>{
//     console.log(`Server is running at http://localhost:${process.env.PORT3}`)

// })