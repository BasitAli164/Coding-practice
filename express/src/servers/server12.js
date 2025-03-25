//! Here we study about cookies related topics and used third party library to manage cookie which is cookie parser
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();app.use(cookieParser()); //? this middleware set for cookies and this must be requried whenever you use the cookieparser to get or set cookie

app.get("/", (req, res) => {
  res.cookie("name", "express app basit",{maxAge:3600}); // here i add cookie in response or set cookies in response , and pass the cookie key and value and the second option is the experiy date which is maxAge: 6miniut after 6 min it remove from the client browser automatically 
  res.send("I am talking from server 12");
});
// if we want to remove the cookie manually then we take this approach 
app.get('/remove',(req,res)=>{
    try {
        res.clearCookie('name') // here we must be provide that key which is assign at set time of the cookie
    res.send("Cookie remove successfully")
        
    } catch (error) {
        res.status(500).json({message:"Internal Server Error",err:error})
        
    }
})

app.get("/fetch", (req, res) => {
  try {
    const dataCookie = req.cookies; // Here we fetch cookies
    console.log(req.cookies);
    res
      .status(200)
      .json({ message: "Cookies get successfully", cookie: dataCookie });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error:", error: message.error });
  }
});

const port = process.env.PORT12 || 3343;

app.listen(port, () => {
  console.log(`Sever is running at http://localhost:${port}`);
});
