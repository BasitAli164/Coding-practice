const http=require('http');

const server=http.createServer((req,res)=>{
    res.write("<h1>Hello Every One this is my Second server in Node js</h1>")
    setTimeout(()=>{
        res.end()
    },2000)
})

const port=5432;
server.listen(port,()=>{
    console.log(`Server is Runing at http://localhost:${port}`);
    
})