const http = require("http");
const fs=require('fs');

const server = http.createServer((req, res) => {
    console.log( req.method);
    
  res.write("<h1>Hello Every One this is my Second server in Node js</h1>");
  setTimeout(() => {
    res.end();
  }, 2000);
  if (req.url === "/") {
    res.write("<html>");
    res.write("<head><title>Form in Node js</title></head>");
    res.write("<body>");
    res.write("<h1>Welcome to Home Page..</h1>");
    res.write('<form action="/submitform" method="POST">');
    res.write(
      "<input type='text' id='name' name='name' placeholder='Enter your name'/><br/><br/>"
    );
    res.write("<label for='gender'>Gender</lable> <br/><br/>");
    res.write("<input type='radio' id='male' name='gender ' value='male'/>");
    res.write("<label for='male'>Male</lable>");
    res.write(
      "<input type='radio' id='female' name='gender ' value='female'/>"
    );
    res.write("<label for='female'>Female</lable><br/><br/>");
    res.write("<button type='submit'>Submit</button>");
    res.write("<form/>");
    res.write("<body/>");
    res.write("<html/>");
    return res.end();
  }else if (req.method=="POST" && req.url.toLowerCase() =="/submitfrom") {
   
    // res.write("<head><title>Submit Form</title></head>");
    // res.write("<body>");
    // res.write("<h1>Hello, Everyone I make a simple form by using Node JS</h1>");
    // res.write("<body/>");
    req.on("data",(chunk)=>{
      console.log("Chunk :",chunk)
    })
    fs.writeFileSync('user.txt',"basit ali")
    res.statusCode=302;
    res.setHeader("Location","/")
   
    return res.end();
  } else {
    
    res.write("<head><title>Error</title></head>");
    res.write("<body>");
    res.write("<h1>Not-Found 404</h1>");
    res.write("<body/>");
  
    // return res.end();
  }
});

const port = 4351;

server.listen(port, () => {
  console.log(`Server is Runing at http://localhost:${port}`);
});
