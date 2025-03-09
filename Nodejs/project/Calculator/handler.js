const requestHandler=(req,res)=>{
    console.log(req.url,req.method)
}
exports.requestHandler=requestHandler;