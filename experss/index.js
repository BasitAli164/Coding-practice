import {express} from 'experss';


const app=express();

const port=3000;

// Define a simple route

app.get("/",(req,res)=>{
    console.log(req.method )
    res.send("Hello Experss")
})
app.listen(port, ()=>{
    console.log(`The server is running at http://localhost:${port}`)
})