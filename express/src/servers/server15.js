//! Here we handle authentication by using jwt
import express from 'express';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import dbConnect from '../config/db/dbConnection6';


const app=express();
dotenv.config();
app.use(express())
const user=[]


app.get('/',(req,res)=>{
    try {
        res.send("Hi! I am talking from server 15")
        
    } catch (error) {
        console.error("Home page error:",error)
        
    }
})

app.post('/register',async(req,res)=>{
    try {
        const {userName,password}=req.body;
        const hashPasword=await bcrypt.hash(password,10);
        user.push({
            userName,
            password:hashPasword
        })
        res.status(200).json({message:"User register successfully.."})

        
    } catch (error) {
        res.status(500).json({message:"Internal Server Error"})
        
    }
})

app.post('/login',async(req,res)=>{
    try {
        const {userName,password}=req.body;
    const users=user.find((user)=>user.userName===userName)
    if(!users || !(await bcrypt.compare(password,users.password))){
        return res.status(401).json({message:"Not Authorized"})
    }
    //? if the user is avaiable then we generate token by uisng jwt

    const token=jwt.sign({userName:userName},process.env.JWT_SECRET_KEY)// this sign method required two parameters one is object where we assign data and the second parameter is JWT_SECRET_KEY


    res.status(200).json(token) 
        
    } catch (error) {
        res.status(500).json({message:"Internal Server Error",error})
        
    }
})

app.get('/dashboard',(req,res)=>{
    try {
        const token=req.header("Authorization") // the toke we get from the header because it sent there and the key is Authorization, which is sent the server inside the  header authorize section

        const decodedToken=jwt.verify(token,process.env.JWT_SECRET_KEY)
        if(decodedToken.userName){
        res.json({message:`Welcom ${decodedToken.userName}`})
        }   
        
    } catch (error) {
        res.status.json({message:"Access denied"})
        
    }
})
const port=process.env.PORT15 || 3433;

dbConnect().then(()=>{
    try {
        app.listen(port,()=>{
            console.log(`Server is running at http://localhost:${port}`)
        })

        
    } catch (error) {
        console.error("Server failed to run",error)
        
    }
}).catch((error)=>{
    console.error("Database failed to connect",error)
})