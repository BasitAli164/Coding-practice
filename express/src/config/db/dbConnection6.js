import mongoose from "mongoose";


const dbConnect=async()=>{
    try {
        await mongoose.connect(process.env.PORT14||"")    
    } catch (error) {
        console.error("Mongodb connection failed error: ",error)

    }
    mongoose.connection.on("Error",()=>{
        console.error("Database connection failed ")
    })


}
export default dbConnect;