import mongoose from 'mongoose';


export const dbConnection= await mongoose.connect(process.env.URI).then(()=>{
    console.log("DB connected")
})