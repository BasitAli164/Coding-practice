import express from 'express'

const app=express();

app.get('/',(req,res)=>{
    res.send("Now, Again working on Experss js and this is second experss server")
})




//! Port
const port=3000;
//! Server is Listening
app.listen(port,()=>{
    console.log(`Server is listening at http://localhost:${port}`)
})