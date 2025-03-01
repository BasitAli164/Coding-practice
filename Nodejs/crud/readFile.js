    const fs= require('fs');

    // for read file from system
    const text1=fs.readFileSync("./text.txt") // form current folder
    const text2=fs.readFileSync("C:\\Users\\aaa\\Desktop\\New Microsoft Word Document.txt") // from desktop
    const text3=fs.readFileSync("C:\\Users\\aaa\\Desktop\\My-Resume.pdf");
    console.log(text1.toString())
    console.log(text2.toString())
    console.log(text3.toString())
    console.log("object")
    console.log("global",global)
    console.log("globalThis",globalThis)

    
    // rename the file name

    const rename=fs.renameSync("Desktop\\New Microsoft Word Document.txt","Node js")