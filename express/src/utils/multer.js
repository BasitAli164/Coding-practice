import multer from 'multer'
const storage=multer.diskStorage({
    distination:"upload",
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+"_"+Date.now()+file.originalname)
    }
})

export const upload=multer(
    {storage,
        limits:{
            filesize:5*1024*1025
        }}
)
