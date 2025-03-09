const sumRequestHandler=(req,res)=>{
console.log("in sumRequestHandler ",req.url)
const bodyArray=[];
    req.on("data",chunk=>bodyArray.push(chunk))
    req.on("end",()=>{
     const bodyStr=Buffer.concat(bodyArray).toString();
     
    })
};
exports.sumRequestHandler=sumRequestHandler;