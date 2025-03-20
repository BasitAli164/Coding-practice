//! Here we dealing with form handling(multipart form handling) though third library like multer

import express from 'express';
import dotenv from 'dotenv';
import multer from 'multer'


//! Storage configration for multer means where the file type data are stored in our system, device or and folder
    const storage=multer.diskStorage({ // this is for stroage the file data in our system or folder or app
        destination:'upload',
        filename:(req,file,cb)=>{//? this is for  to set the file name properly
            cb(null,file.fildename+"_"+Date.now()+file.originalname)

        }
    })
const app=express();
// const upload=multer() //? Before means without using stroage which give data in buffer type like in this form
/*
{
  fieldname: 'image',
  originalname: 'IMG_20240512_102422_152.jpg',
  encoding: '7bit',
  mimetype: 'image/jpeg',
  buffer: <Buffer ff d8 ff e1 2c ad 45 78 69 66 00 00 4d 4d 00 2a 00 00 00 08 00 10 01 0e 00 02 00 00 00 01 00 01 00 00 01 0f 00 02 00 00 00 15 00 00 01 2e 01 10 00 02 ... 2651203 more bytes>,
  size: 2651253
}
*/
const upload=multer({
    storage,
    limits:{ //? this is for to set max size of the file data type 
        fileSize:1024*100000
    }
}) //? if we use this then we get the data in this form
/*
{
  fieldname: 'image',
  originalname: 'IMG_20240512_102422_152.jpg',
  encoding: '7bit',
  mimetype: 'image/jpeg',
  destination: 'upload',
  filename: '848262e0024b5d07991be99700933d45',
  path: 'upload\\848262e0024b5d07991be99700933d45',
  size: 2651253
}

*/
dotenv.config();




app.use(express.static('public'))// this is for fetching static data form public folder
// app.use(upload.array())//? Here i use the multer functionality and use the array to catch multipart data in it
app.use(upload.single('image'))// here we must be give te field name if we are using the single property , 


app.get('/',(req,res)=>{
    res.send("Hi! I am talking from server 6")
})

app.post('/form',(req,res)=>{
    console.log(req.body)
    console.log(req.file) // this give me buffer data
    res.send("Successfully!")
})


app.listen(process.env.PORT6,()=>{
    console.log(`Server is runing at http://localhost:${process.env.PORT6}`)
})