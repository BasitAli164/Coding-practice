const { sumRequestHandler } = require("./sum");

const requestHandler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
            <html>
            <head><title>Calcualtor Home Page</title></head>
            <body>
            <h1>Welcome to the Calculator Home Page</h1>
            <br/>
            <a href="/calculator">Go To Calculator</a>
            </body>
            
            </html>
            `);

    return res.end();
  }else if(req.url.toLowerCase()=='/calculator' && req.method=="POST"){
    console.log(req.url, req.method);

    // res.setHeader("Content-Type", "text/html");
    res.write(`
            <html>
            <head><title>Calcualtor  Page</title></head>
            <body>
            <h1>Here is the Calculator</h1>
            <br/>
           <form action="/calculate-result" method="POST">
            <div>
             <label>Number-1: </label>
            <input type='text' placeholder="Enter first number" name="first"/>
            </div>   <br/>
            <div>
             <label>Number-1: </label>
            <input type='text' placeholder="Enter second number" name="second"/>
            </div>   <br/>
            <div>
            <input type="submit" value="sum"/>
            </div>
           </form>

            </body>
            
            </html>
            `);

    return res.end();
  }else if(req.url.toLowerCase()==='/calculate-result' && req.method=="POST"){
    return sumRequestHandler()
  }
  res.setHeader("Content-Type", "text/html");
  res.write(`
            <html>
            <head><title>Error Page</title></head>
            <body>
            <br/>
            <h1>404 Page Does not Found</h1>
            <br/>
            <a href="/">Go to Home</a>

            </body>
            
            </html>
            `);
            res.end()
};
exports.requestHandler = requestHandler;
