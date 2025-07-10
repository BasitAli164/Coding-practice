import mongoose from "mongoose";




const dbConnect=async()=>{
    try {
        await mongoose.connect(process.env.URI)
        console.log('Database successfully connected!')
    } catch (error) {
        console.error('Database connection error: ',error)
        
    }
    mongoose.connection.on('Error',()=>{
        console.log('Failed to connect with database')
    })
}

export default dbConnect