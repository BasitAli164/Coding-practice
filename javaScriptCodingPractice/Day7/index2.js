let studentAge=20;
document.write(studentAge>20?"<br>you are a good person":"<br>You are try to show good person")

let subjectMarks=prompt("Enter you subject marks: ");
document.write(subjectMarks>30?"<br>You are pass.Congratulation !":"<br>You are fail.Try Again")

// multiple if else blocks  
let percentage=prompt("Enter your Percentage: ",70);
if(percentage>90 && percentage<=100){
    document.write("<br>Your Grade is: A")
}else if(percentage>=80 && percentage<=89){
    document.write("<br>Your Grade is: B")
}else if(percentage>=70 && percentage<=79){
    document.write("<br>Your Grade is: C")
}else if(percentage>=60 && percentage<=69){
    document.write("<br> Your Grade is: D")
}else{
    document.write("<br>Your Grade is: E")
}