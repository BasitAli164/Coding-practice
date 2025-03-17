import express from 'express';

const app=express();


app.get('/',(req,res)=>{
    res.send("Hi! again start express js")
})

app.listen(process.env.PORT4,()=>{
    console.log(`Server is running at ${process.env.PORT4}`)
})

