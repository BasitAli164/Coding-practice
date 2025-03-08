const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.setHeader("Content-Type","html/text")
        res.write("<html>")
        res.write("<head><title>Home Page</title></head>")
        res.write("<body>")
        res.write("<h1>...Home Page...</h1>")
        res.write("</body>")
        res.write("<")
    }
    
})



const port=4000;
server.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`)
})