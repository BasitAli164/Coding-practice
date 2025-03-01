// this is for window os and other have different code

const {exec} =require("child_process");
// option-1
exec('start brave') // here you give that application which you want to open like postman ,chrome etc
exec("start code") // don't need this again for code you direct write start code(any thing whose command are avaiable in node js )

// option-2
// exec("Here we the path of file or folder and here we don't write start at prefix") 
exec("C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe") // for run used: node filename.js