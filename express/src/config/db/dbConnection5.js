import mongoose from 'mongoose';

const dbConnect=async()=>{
    try {
        await mongoose.connect(process.env.URI ||" ");
        console.log("Database connected successfully...")
        
    } catch (error) {
        console.error("Database connection failed...")        
    }
    mongoose.connection.on("Error",()=>{
        console.error("Database Failed to connect")
    })
}

export default dbConnect;