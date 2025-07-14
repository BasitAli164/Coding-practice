import {OpenAI} from 'openai';
import dotenv from 'dotenv'
dotenv.config()


// create the instance of the openai 
const openai=new OpenAI({
    apiKey:process.env.OPEN_AI_KEY
})

