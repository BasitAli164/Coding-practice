import express from 'express'

const app=express();

app.get('/',(req,res)=>{
    res.send("Now, Again working on Experss js and this is second experss server")
})

//!  multiple route parameter(multiple params in url)
app.get('/things/:name/:id',(req,res)=>{
    const {name,id}=req.params;
    res.json({
        message:"Get Data from URL ",
        id,
        name
    })

})

//! Using regx in url with params 
app.get('/product/:name/:id([0-9]{5})',(req,res)=>{ //? Here i use regx and this regx work is if id should be 5 digit and must be a number , if don't provide then we get error
    const {name,id}=req.params;
    res.json({
        message:"Get Data form URL",
        id,
        name
    })

})


//! Port
const port=3001;
//! Server is Listening
app.listen(port,()=>{
    console.log(`Server is listening at http://localhost:${port}`)
})