import express from 'express';
import dotenv from 'dotenv';
import dbConnect from '../config/db/dbConnection7';




const app=express();
dotenv.config();



dbConnect().then(()=>{
    
})