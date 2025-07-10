import express from 'express';
import dotenv from 'dotenv';
import dbConnection2 from '../../config/db/dbConnection2.js';
import { Person } from '../models/person.js';


const app=express();
dotenv.config();
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("I am talking from server 9")
})


app.post('/addPerson',async(req,res)=>{
    // console.log(req.body)
    const {name,age,email}=req.body;

    const newPerson=new Person({
        name,age,email
    })
    await newPerson.save();
    res.send('Person Added ')
    console.log(`New person is: `,newPerson);
    

})

app.put('/updatePerson',async(req,res)=>{
    const {email,id}=req.body
    const personData=await Person.findById(id)
    personData.age=50;
    await personData.save();
    console.log('Person Data: ',personData)

    res.send("Update Successfully..")

})

const port=process.env.PORT9 || 4433;


dbConnection2().then(()=>{
    app.listen(port,()=>{
        console.log(`Server is running at http://localhost:${port}`)
        
    })
}).catch((err)=>{
    console.error(`Sever failed to start because the reason are this error: ${err}`)
})