import express from 'express'
import { userLogin, userRegister } from '../controller/controller1.js';

const router=express.Router();


router.get('/login',userLogin )
router.get('/register',userRegister)

export default router