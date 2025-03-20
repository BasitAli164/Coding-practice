import express from 'express';
import dotenv from 'dotenv'
import { storage } from '../utils/multer';

const app=express();
dotenv.config();
const upload=multer(
    {storage,
        limits:{
            filesize:1024*10000000
        }}
)
app.use(upload.single('image'))
app.post('/form',(req,res)=>{
    console.log(req.body)
    console.log(req.file)
})


app.listen(process.env.PORT7,(req,res)=>{
    console.log(`Server is runing at http://localhost:${process.env.PORT7}`)
})