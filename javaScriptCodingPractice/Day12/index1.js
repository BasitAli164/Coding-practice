// naming function 
function showMessage1(){
    alert("My name is Basit Ali...")
}
showMessage1();

function showMessage2(){
    let message="Hellow World! I am JavaScript"; // local variable
    alert(message);
}
showMessage2()

let userName="Basit Ali"; // outer variable
function showMessage3(){
    let message="Hello "+userName;
    document.write(message)
}
showMessage3()

let age=25;
document.write("<br>Age is outside of the function:",age)
function showAge(){
    age=23;
    let message="My age is :"+age;
    document.write("<br> Age in function ",message)
}
document.write("<br> Age is down of the function: ",age)
showAge()
document.write("<br> Age is after execution of function:",age)
//Paramaterized function
function introduction(name,age){
    document.write(`<br>My name is ${name} and i am ${age} year old person.`)
}
introduction("Basit Ali ",23)
 // Default parameterized function 

 function sum(a,b=10){
    document.write(`<br>The sum of ${a} and ${b} is ${a+b}`)
 }
sum()
sum(0)
sum(12)
sum(10,20)
