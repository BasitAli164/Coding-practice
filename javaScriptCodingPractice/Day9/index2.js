//Task:
//T-1
document.write(null||2||undefined);
//T-2
document.write("<br>",alert(1)||2||alert(3))
//T-3
document.write("<br>",1&&null&&2)
//T-4
alert(alert(1)&&2&&alert(3))
document.write("<br>",alert(1)&&alert(3));

document.write("<br>",null || 2 && 3||4);
//T-5
let age=prompt("Enter your age: ",0);
if(age>14&&age<90){
    document.write("Inclusively........")
}
if(!(age>14&&age<90)){
    document.write("Inclusively 2........")
}
if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );