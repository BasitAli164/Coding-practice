const sumRequestHandler=(req,res)=>{
console.log("in sumRequestHandler ",req.url)
const bodyArray=[];
    req.on("data",chunk=>bodyArray.push(chunk))
    req.on("end",()=>{
     const bodyStr=Buffer.concat(bodyArray).toString();
     const params=new URLSearchParams(bodyStr);
     const bodyObj=Object.fromEntries(params);
     const result=bodyArray.first+bodyArray.second;
     console.log(result)

    })
};
exports.sumRequestHandler=sumRequestHandler;