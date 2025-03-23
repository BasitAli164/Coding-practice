//! Here we perform the crud operation by using the mongoose query 
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
//? Creating document
app.post('/add',async(req,res)=>{
    // console.log(req.body)
   try {
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
    
   } catch (error) {
    console.error("Failed to add data into the db")
    
   }
})
//? Updating Document
app.put('/updates',async(req,res)=>{
    
   try {
    const {name,age,id}=req.body
    console.log(req.body)

    //! Here first we explore how to find data from db , so the following quersion are use
    //! First Method: find()
    // const personData=await Person.find({age,name}); //? this mongoose query used to find a data or information on the basis of credential which are we provide , it return all data or information  which match with our credential
   
    //! Second Method: findOne()
    // const findOnlyOne=await Person.findOne({name}) //? this query return first added document or inforamtion if we are add many document related to same credential

    //! Third Method: findById
    const findById=await Person.findById(id) //? this quersy return data or document on the basis of Id 
    console.log(findById)
    //! there are many other method to find data or document from db like findMany
    // if (findOnlyOne.length === 0) {
    //     return res.status(404).json({
    //         message: "No matching documents found",
    //     });
    // }
    //! Here i explore that query which are help to modify or update the document or information
    
    //! First Method
        const perData=await Person.findById(id) //? here i find the document
        // perData.age=50; //? here i change the age of above document which i find through id 
        await perData.save(); //? here i save after change


    //! Second Method
    const personsData=await Person.findByIdAndUpdate(id,{//? here i find the document and update at time , mostly we can use this
        age:45
    })
    const findByIdAndUpdate=await perData.save();

    res.json({
        message:"Update Successfull",
        findByIdAndUpdate
    })

    
   } catch (error) {
    console.log(error)
    
   }

})
//? Deleting Document
app.delete('/delete/:id',async(req,res)=>{
    const {id}=req.params;
    await Person.findByIdAndDelete(id)//? this query of mongoose ,first find that document on the basis of id which are porvided then delete means this query work tow things at a time
    res.json({
        message:"Successfully deleted!"
    })


})




const port=process.env.PORT10 || 4332;

dbConnection3().then(()=>{
    app.listen(port, ()=>{
        console.log(`Server runing at http://localhost:${port}`)
    })
}).catch((error)=>{
    console.error(`Server failed to connect , due to this error ${error}`)
})