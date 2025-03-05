const http=require('http');

const server=http.createServer((req,res)=>{
    // console.log("request on server",req) // this give  whole object
    console.log("Url is: ",req.url);
    console.log("Method is: ",req.method);
    console.log("Header is: ",req.headers);

    if(req.url==='/'){
        res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<head><title>Home Page</title></head>')
    res.write('<body><h2>Hello world ! I am learning the node js</h2></body>')
    res.write('</html>')
    return res.end();
        
    }else if(req.url.toLowerCase()==='/skills'){
        res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<head><title>Skill Page</title></head>')
    res.write('<body><h2>React ,Next js ,Mongodb </h2></body>')
    res.write('</html>')
    return res.end();

    }else{
        res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<head><title>Error Page</title></head>')
    res.write('<body><h2>404</h2></body>')
    res.write('</html>')
    return res.end();

    }
    
  
    
        

    
    // process.exit();// this is used to stop the server , this name is event loop 
})

server.listen(2000,()=>{
    console.log("server is runing on http://localhost:2000");
    
})