// Calculator

 const http=require("http")
 const {requestHandler}=require('./handler');
 

 const server=http.createServer(requestHandler)
const port=4000;
 server.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`)
 })
  