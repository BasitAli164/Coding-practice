import mongoose from "mongoose";

const personSchema=new mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    password:String,
    gender:String
})

export const Person=mongoose.model("person",personSchema)
