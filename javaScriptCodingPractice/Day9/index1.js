// and operator in logical operator
//Rules of and operator
document.write("Rules of and operator:::");
document.write("<br> true and true: ",true&&true)
document.write("<br> true and false: ",true&&false)
document.write("<br> false and false: ",false&&false)
document.write("<br> false and true: ",false&&true);


let hour=12;
let miniute=30;
if(hour==12 && miniute==30){
    document.write("<br>Time is 12:30");
}
if(hour==12&&miniute==23){
    document.write("<br>Time is 12:23");
}

if(1&&0){
    document.write("<br>1 and 0 is true");
}
// alert( 1 && 0 ); // 0
// alert( 1 && 5 ); // 5
// alert( null && 5 ); // null
// alert( 0 && "no matter what" ); // 0
// alert( 1 && 2 && null && 3 );
// lert( 1 && 2 && 3 );

// Not oeprator
document.write("<br><br>Rules of Not operator:::");
document.write("<br>!true: ",!true)
document.write("<br>!false: ",!false)


// code
document.write("<br>!0 is: ",!0);
document.write("<br> !!'Non' is: ",!!'Non');
