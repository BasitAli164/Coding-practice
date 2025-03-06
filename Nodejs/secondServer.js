const http=require('http');

const server=http.createServer((req,res)=>{
    res.write("<h1>Hello Every One this is my Second server in Node js</h1>")
    setTimeout(()=>{
        res.end()
    },2000)
    if(req.url==='/'){
        res.setHeaders("Content-Type","text/html")
        res.write("<html>")
        res.write("<head>")
        res.write("<title>Form with Node js</title>")
        res.write("</head>")
        res.write("<body>")
        res.write('<h1>Welcome to Home Page..</h1>')
        res.write('<form action="/submit-details" method="POST">')
        res.write("<input type='text' id='name' name='name' placeholder='Enter your name'/><br/><br/>")
        res.write("<label for='gender'>Gender</lable> <br/><br/>")
        res.write("<input type='radio' id='male' name='gender ' value='male'/>")
        res.write("<label for='male'>Male</lable>")
        res.write("<input type='radio' id='female' name='gender ' value='female'/>")
        res.write("<label for='female'>Female</lable><br/><br/>")
        res.write("<button type='submit'>Submit</button>")
        res.write("<form/>")
        res.write("<body/>")
        res.write("<html/>")
        return res.end();

    }
})

const port=4321;

server.listen(port,()=>{
    console.log(`Server is Runing at http://localhost:${port}`);
    
})