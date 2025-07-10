// logical operator

// Or Operator


// the rule of or operator is :
document.write("The rule and regulation of Or operator:")
document.write("<br>true or false: ",true||false);
document.write("<br>ture or true: ",true||true);
document.write("<br>false or true: ",false||true);
document.write("<br> false or false: ",false||false)

//programs 
let a=10,b=40;
console.log(a||b)

let hours=7;
if(hours<10 || hours>18){
    document.write("<br>The office is closed ........")
}
 let isWeakend=true
 if(hours<5 || hours>10||isWeakend){
    document.write("<br>The office is closed confirmly.....")
 }

 let firstName="",lastName="",nickName="<br>PariZad";
document.write( firstName||lastName||nickName||"Basit ali")
document.write(true||alert("not printend"))
document.write(false||alert("<br>printend"))