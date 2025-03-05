const http=require('http');

const server=http.createServer((req,res)=>{
    console.log("request on server")
})

server.listen(2000,()=>{
    console.log("server is runing on http://localhost:2000");
    
})