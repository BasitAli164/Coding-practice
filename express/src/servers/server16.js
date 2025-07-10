//! Here we are explore or study about the rest api and error handling in express.js application
import express from "express";
import dotenv from "dotenv";
import dbConnect from "../config/db/dbConnection7";

const app = express();
dotenv.config();
app.use(express.json());

//! these event listener handle the error and prevent to crash our express js application 
//?First
process.on("uncaughtException",(err)=>{ // this for uncaughtException 
    console.log(err)
    process.exit(1)// this close our application , prevent to crash , this event default value is 0 , therefore we use 1
})
//? Second
process.on("unhandledRejection",(resaon , promise)=>{// this for unHandleRejection
        console.log(resaon)
})
app.get("/", (req, res) => {
  try {
    res.send("Hi I am talking from server 16");
  } catch (error) {
    console.error("Internal server Error", error);
    res.status(500).json({ message: "Internal Server error" });
  }
});

// GET ALL PRODUCTS
app.get("/api/products", (req, res) => {
  try {
    const products = [
      { id: 1, name: "labtop", price: 3434 },
      { id: 2, name: "mobile", price: 888 },
      { id: 3, name: "labtop", price: 443 },
    ];
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
  }
});
// Single Product
app.get("/api/product/:id", (req, res) => {
  try {
    const products = [
      { id: 1, name: "labtop", price: 3434 },
      { id: 2, name: "mobile", price: 888 },
      { id: 3, name: "labtop", price: 443 },
    ];
    const porduct = products.find((prod) => prod.id === Number(req.params.id)); // here we find data through id base which are comes from url as a params
    if (!porduct) {
      return res.status(404).json({ message: "Product Not Found" });
    }
    res
      .status(200)
      .json({ message: "Product found and its detail is: ", porduct });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
  }
});

// Create a new product
app.post("/api/addProduct", (req, res) => {
  try {
    const newPorduct = req.body;
    newPorduct.id = Date.now();
    res
      .status(201)
      .json({ message: "Product Created Successfully", newPorduct });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
  }
});
//! Handling Errors in Express js application
//? Synchronous Error
app.get("/syn_err", (err, req, res, next) => {
  // this api handle the four parameter where err for error handling and next is a callback who perform , expose the error , req,res we know that

  try {
    throw new Error("Something went wrong!");
  } catch (error) {
    next(error);
  }
});

//? Async Error
app.get("/async_err", async (req, res, next) => {
  try {
    await Promise.reject(new Error("Async Error occured"));
  } catch (error) {
    next(error);
  }
});

//! Global error handling middleware that will catch all errors in express app
app.use((err,req,res,next)=>{
    console.error(err.message)
    console.log(err.stack)
    res.status(500).json({message:err.message})
})
const port = process.env.PORT16 || 3433;
dbConnect()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("Database failed to connect and error is: ", error);
  });
