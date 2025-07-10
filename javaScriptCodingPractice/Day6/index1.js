// comparison operators
// i-Number comparison
let num1=10;
let num2=5;
document.write("10 is greater than 5:",num1>num2);
document.write("<br> 10 is less than or equal to 5 :",num1<num2);


let num3=10;
let num4=10;
document.write("<br> 10 is equal to 10: ", num3==num4)
document.write("<br> 10 is greater then and equal to 10: ",num3>=num4)
document.write("<br> 10 is less than and equal to 10: ",num3<=num4)
document.write("<br> 10 is not equal to 10: ",num3!=num4)

// ii-String Comparison 
let str1='A';
let str2='Z';
document.write("<br> A is equal to Z: ",str1==str2)

let str3='apple';
let str4='banana';
document.write("<br> apple is greater than banana :",str3>str4);
document.write("<br> apple is less than or equal to banana :",str3<str4);
document.write("<br> apple is equal to banana: ",str3==str4)


//comparsion with different type
let diff1='1';
let diff2=1
document.write("<br> '1' is equal to 1: ",diff1==diff2)
document.write("<br> '1' is greater than 1 is: ",diff1>diff2)
document.write("<br> '1' is less than 1 is: ",diff1<diff2)

let diff3='01';
let diff4=1;
document.write("<br> '01' is equal to the 1 is :",diff3==diff4)
document.write("<br> '01' is greater than to 1 is: " ,diff3>diff4)
document.write("<br> '01' is less than to 1 is: " ,diff3<diff4)

let boolt=true
let boolf=false
document.write("<br> true is equal to 1 is: ",boolt==1)
document.write("<br> false is equal to 0 is: ",boolf==1)
document.write("<br> '' is equal to 0 ",''==0)
document.write("<br> '' is equal to false ",''==false)

// comparison with null and undefine
document.write("<br> the null === undefine:  ",null===undefined)
document.write("<br> the null == undefine:  ",null==undefined)
document.write("<br> null>0 : ",null>0)
document.write("<br> null==0 : ",null==0)
document.write("<br> null>=0 : ",null>=0)

document.write("<br> undefined>0 : ",undefined>0)
document.write("<br> undefined<0 : ",undefined<0)
document.write("<br> undefined==0 : ",undefined==0)
document.write("<br> '2' > '12' is: ","2" > "12")
document.write("<br> null='\n0\n'",null == "\n0\n")
document.write("<br> null='\n0\n'",null === "\n0\n")
document.write("<br> null='\n0\n'",null === +"\n0\n")