import express from "express";
import dotenv from "dotenv";
import dbConnect from "../config/db/dbConnection7";

const app = express();
dotenv.config();
app.use(express.json())

app.get("/", (req, res) => {
  try {
    res.send("Hi I am talking from server 16");
  } catch (error) {
    console.error("Internal server Error", error);
    res.status(500).json({ message: "Internal Server error" });
  }
});

// GET ALL PRODUCTS
app.get('/api/products',(req,res)=>{
    try {
        const products=[
            {id:1,name:"labtop",price:3434},
            {id:2,name:"mobile",price:888},
            {id:3,name:"labtop",price:443},
        ]
        res.status(200).json({products})
        
    } catch (error) {
        res.status(500).json({message:"Internal Server Error"})
        
    }
})
// Single Product
app.get('/api/product/:id',(req,res)=>{
    try {
        const products=[
            {id:1,name:"labtop",price:3434},
            {id:2,name:"mobile",price:888},
            {id:3,name:"labtop",price:443},
        ]
        const porduct=products.find((prod)=>prod.id===Number(req.params.id)); // here we find data through id base which are comes from url as a params
        if(!porduct){
            return res.status(404).json({message:"Product Not Found"})
        }
        res.status(200).json({message:"Product found and its detail is: ",porduct})

        
    } catch (error) {
        res.status(500).json({message:"Internal Server Error"})
        
    }
})

// Create a new product


const port = process.env.PORT16|| 3433;
dbConnect()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("Database failed to connect and error is: ", error);
  });
