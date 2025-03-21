import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config()



const dbConnection=async()=>{
    try {
        await mongoose.connect(process.env.URI)
        console.log(`Database connected at ${process.env.URI} Successfully.......!`);
        
    } catch (error) {
        console.log(`Database Error ${error}`)
        
    }
    mongoose.connection.on("disconnected", () => {
        console.log("MongoDB Disconnected!");
})
}
export default dbConnection