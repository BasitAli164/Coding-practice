import express from 'express';
import dotenv from 'dotenv';
import dbConnection3 from '../../config/db/dbConnection3.js';
import { Person } from '../models/person.js';

const app=express();
dotenv.config();

app.use(express.json()) // Built-in middleware, it parse the data in the json formate and 
app.get('/',(req,res)=>{
    res.send("I am talking from the server 10")
})

app.post('/add',async(req,res)=>{
    // console.log(req.body)
    const {name,email,password,age,gender}=req.body;
    const newUser=new Person({
        name,
        email,
        password,
        age,
        gender
    })
    console.log(newUser)
   const data= await newUser.save();// save is the moongose query which is used to save data into mongodb
    res.json({
        message:"Successfully added",
        data,
    })
})

app.put('/updates',async(req,res)=>{
    
   try {
    const {name,age}=req.body
    console.log(req.body)
    // const personData=await Person.find({age,name}); //! this mongoose query used to find a data or information on the basis of credential which are we provide , it return all data or information  which match with our credential
   

    const findOnlyOne=await Person.findOne({name}) //! this query return first added document or inforamtion if we are add many document related to same credential
    console.log(findOnlyOne)
    if (findOnlyOne.length === 0) {
        return res.status(404).json({
            message: "No matching documents found",
        });
    }

    res.json({
        message:"Update Successfull",
        findOnlyOne
    })

    
   } catch (error) {
    console.log(error)
    
   }

})




const port=process.env.PORT10 || 4332;

dbConnection3().then(()=>{
    app.listen(port, ()=>{
        console.log(`Server runing at http://localhost:${port}`)
    })
}).catch((error)=>{
    console.error(`Server failed to connect , due to this error ${error}`)
})