import express from 'express'

const app=express();

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${process.env.PORT3}`)

})