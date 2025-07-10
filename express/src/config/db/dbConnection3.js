import mongoose from 'mongoose';
import dotenv from 'dotenv';


dotenv.config();

const dbConnection3=async()=>{
    try {
        await mongoose.connect(process.env.URI)
        console.log(`Database successfully connected...`)
        
    } catch (error) {
        console.error(`MongoDB error: ${error}`)
                
    }
    mongoose.connection.on("Disconnected",()=>{
        console.log("Database Disconnected")
    })
    

}

export default dbConnection3;