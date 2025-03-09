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
