const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.setHeader("Content-Type","html/text")
        res.write("<html>")
        res.write("<head><title>Home Page</title></head>")
        res.write("<body>")
        res.write("<h1 id='home'>...Home Page...</h1>")
        res.write("<a href='#home'>Home</a>")
        res.write("<a href='#men'>Men</a>")
        res.write("<a href='#women'>Wome</a>")
        res.write("<a href='#kids'>Kids</a>")
        res.write("<a href='#carts'>Cart</a>")
        res.write("</body>")
        res.write("</html>")
        return res.end();
    }else if(req.url==="#men"){
        res.setHeader("Content-Type","html/text")
        res.write("<html>")
        res.write("<head><title>Men Page</title></head>")
        res.write("<body>")
        res.write("<h1 id='home'>...Men Page...</h1>")
        res.write("</body>")
        res.write("</html>")
        return res.end()

    }else{
        res.end();
    }
    
})



const port=4000;
server.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`)
})