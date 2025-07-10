const fs = require("fs");
const write=fs.writeFileSync("C:\\Users\\aaa\\Desktop\\New Microsoft Word Document.txt","I am from Skardu");
console.log(write)
const read=fs.readFileSync("C:\\Users\\aaa\\Desktop\\New Microsoft Word Document.txt");
console.log(read.toString())