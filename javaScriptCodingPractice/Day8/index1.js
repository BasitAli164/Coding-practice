// Logical Operator in JavaScript
// OR operator
let a=12; let b=10;
document.write("a||b is: ",a||b ,"<br> A&&b is: ",a&&b)

if(1||0){
    document.write("<br>This is true")
}
else if(1||1){
    document.write("<br>This is also true");
}
else if(0||1){
    document.write("<br>This is also true");
}
else if(0||0){
    document.write("<br>This is false");
}else{
    document.write("<br>Something went wrong");
}

let hour=9;
if(hour<10||hour>18){
    document.write("<br>The office  is closed");
}
let isWeakend=false;
if(isWeakend||hour<10||hour>18){
    console.log("Go to bed");
}
//Task on logical operator:
alert(null|| 2||undefined)

alert(alert(1)||2||alert(3))


alert( 1 && null && 2 );
alert( alert(1) && alert(2) );