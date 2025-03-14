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


//! Port
const port=3001;
//! Server is Listening
app.listen(port,()=>{
    console.log(`Server is listening at http://localhost:${port}`)
})