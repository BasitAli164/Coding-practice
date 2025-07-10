// form handling ,but not work 😩😩😩😩😩
const http = require("http");
const server = http.createServer((req, res) => {


    if(req.url==='/home'){
        res.write("<h1>Home Page</h1>")
        return res.end();
    }else if(req.url==="/men"){
        res.write("<h1>Men Page</h1>")
        return res.end();
    }else if(req.url==="/men"){
        res.write("<h1>Men Page</h1>")
        return res.end();
    }else if(req.url==="/women"){
        res.write("<h1>Women Page</h1>")
        return res.end();
    }else if(req.url==="/kids"){
        res.write("<h1>Kids Page</h1>")
        return res.end();
    }else if(req.url==="/cart"){
        res.write("<h1>Carts Page</h1>")
        return res.end();
    }


  res.write(`
    <!DOCTYPE html>
<html lang="en">
  <head>
    
    <title>Node JS</title>
  </head>
  <body>
    <header>
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/men">Men</a></li>
        <li><a href="/women">Women</a></li>
        <li><a href="/kids">Kids</a></li>
        <li><a href="/cart">Cart</a></li>
      </ul>
    </header>
  </body>
</html>

    
    `);
    return res.end()
});

const port = 4000;
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
