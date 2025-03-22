import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const dbConnection=async()=>{
    try {
        mongoose.connect(process.env.URI)
    } catch (error) {
        console.log(`Database error: ${error}`)
    }
}