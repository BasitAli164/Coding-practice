//! Here i am talking or  exploring topics related to session
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import session from "express-session";

const app = express();
dotenv.config();
app.use(cookieParser()); // This middleware use for cookieParser
app.use(
  session({
    secret: "smaple secret", //This is the secret used to sign the session ID cookie
    resave: false, //orces the session to be saved back to the session store, even if the session was never modified during the request.
    saveUninitialized: false, //Forces a session that is "uninitialized" to be saved to the store. A session is uninitialized when it is new but not modified. Choosing false is useful for implementing login sessions, reducing server storage usage, or complying with laws that require permission before setting a cookie. Choosing false will also help with race conditions where a client makes multiple parallel requests without a session.

    //? see more detail through hover on each key
  })
); // This middleware use for session

app.get("/", (req, res) => {
  try {
    res.send("Hi! I am talking from server 13");
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", erorr: error });
  }
});
// this route purpose to handle any user how many times comes at same page by using session
app.get("/visit", (req, res) => {
  try {
    if(req.session.page_views){
       const count= req.session.page_views++;// here i manage the numbre of count means the user how many time comes the same page and store that into backend(db) using session 
        res.send(`You visited this page ${count} times`)
    }else{
        req.session.page_views=1;
        res.send("Welcome to this page for the first time!")
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", erorr: error });
  }
});

app.get('/removeSession',(req,res)=>{
    try {
        req.session.destroy()// by using this method romove all session from the backend (db)
        res.send("Session Removed")
        
    } catch (error) {
        res.status(500).json({message:"Internal Server Error",erorr:error})

        
    }
})
const port = process.env.PORT13 || 3434;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
