import mongoose from 'mongoose';
import dotenv from 'dotenv';


dotenv.config();

const dbConnection=async()=>{
    try {
        await mongoose.connect(process.env.URI,{

        })
        console.log(`Database connection at ${process.env.URI} successfully .....`)
    } catch (error) {
        console.log(`Database connection error ${error}`);
        
        
    }
    mongoose.connection.on('Disconnected',()=>{
        console.log("MongoDB Disconnected!")
    })
}
export default dbConnection;