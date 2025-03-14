import express from 'express'

const app=express();

app.get('/',(req,res)=>{
    res.send("Now, Again working on Experss js and this is second experss server")
})

//!  multiple route parameter(multiple params in url)
app.get('/things/:name/:id',(req,res)=>{
    
})


//! Port
const port=3001;
//! Server is Listening
app.listen(port,()=>{
    console.log(`Server is listening at http://localhost:${port}`)
})