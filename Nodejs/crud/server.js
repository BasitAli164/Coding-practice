const http=require("http");
const sever=http.createServer((req, res)=>{
console.log("Request is: ",req)
res.end("Hi, Server is Running here!")
})
sever.listen(300)