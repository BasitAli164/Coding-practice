import mongoose from "mongoose";

const dbConnect=async()=>{
    try {
        await mongoose.connect(process.env.URI)
        console.log('Database successfully connected...')
    } catch (error) {
        console.error(`MongoDB Error: ${error}`)
        
    }
    mongoose.connection.on("Error",()=>{
        console.error("Failed to connect with database")
    })
}
export default dbConnect