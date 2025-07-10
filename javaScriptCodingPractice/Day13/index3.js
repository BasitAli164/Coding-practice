// Arrow function 
//The arrow function is a shorter way to write a function expression. It does not have its own this, arguments, super, or new.target bindings.
/*
Syntax:
let func = function(arg1, arg2, ..., argN) {
  return expression;
};

*/

let sum=()=> 4+3
document.write("By using arrow function, the sum of 4 and 3 is: ",sum())

let multiplication=a=>a*4;// if we have only one parameter in arrow function then we use this syntax
document.write("This is the shortest form of the arrow function :",multiplication(4))
let sum1=(a,b)=>a+b;
document.write("<br>By using arrow function, the sum of 5 and 6 is: ",sum1(5,6))

let sum2=(a,b)=>{
    return a+b;
}
document.write("<br> By uisng the arrow function block ,the sum of 7 and 8 is: ",sum2(7,8));

let age=prompt("Enter your age:",18);
let welcom3=(age>18)?
()=>{alert("Welcome to the website")}:
()=>{alert("Sorry, you are not eligible to access the website")};
welcom3();

let sum3=(a,b)=>{
    let result=a+b;
    return result;
}

document.write("<br>The sum of 9 and 10 is: ",sum3(9,10))
//Task:
let ask=(question,yes,no)=>{
    if(confirm(question)) yes();
    else no();

};
ask(
    "Do you want to continue?",
    ()=>alert("You have chosen to continue"),
    ()=>alert("You have chosen to stop")
);