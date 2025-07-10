import mongoose from 'mongoose';

const userSchem=new mongoose.Schema({
    userName:{
        type:String,
        required:true,  
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    userOrder:{
        type:Object,
        default:{}
    }
},{
    timestamps:true,
    minimize:false
})

export const User=mongoose.model("User",userSchem)