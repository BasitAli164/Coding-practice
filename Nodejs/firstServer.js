const http = require("http");

const server = http.createServer((req, res) => {

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
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
  } else if (req.url.toLowerCase() === "/submitfrom" && req.method==="POST") {
    res.write("<head><title>Submit Form</title></head>");
    res.write("<body>");
    res.write("<h1>Hello, Everyone I make a simple form by using Node JS</h1>");
    res.write("<body/>");
    return res.end();
  } else {
    res.write("<body><h2>Not-Found 404</h2></body>");
  }

  // process.exit();// this is used to stop the server , this name is event loop
});

server.listen(2000, () => {
  console.log("server is runing on http://localhost:2000");
});
