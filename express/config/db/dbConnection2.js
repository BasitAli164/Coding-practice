import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const dbConnection2=async()=>{
    try {
       await  mongoose.connect(process.env.URI)
        console.log(`Database connected at ${process.env.URI} successfully...!`);
        
    } catch (error) {
        console.log(`Database error: ${error}`)
    }
    mongoose.connection.on("Disconnected",()=>{
        console.log('MongoDB Disconnected....!')
    })

}
export default dbConnection2