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