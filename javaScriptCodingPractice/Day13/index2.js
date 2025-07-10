// function Expression 
// Syntax of function expression is let variableName=function(){};
let sumFunction=function(){
    return 5+1;
};
document.write("<br>The function is: ",sumFunction) // it hold the instance of the above function means copy of the function 
document.write("<br>The function value after execution: ",sumFunction());

let funcExpression=function(){
    return "<br>The function expression like this: let func=function(){};";
}
// let copyFunc=funcExpression(); this is wrong 
let copyFunc=funcExpression;



// document.write(copyFunc());
document.write("<br>",copyFunc());

document.write(funcExpression());

// Call Back
function ask(question,yes,no){
    if(confirm(question)) yes()
    else no();
}
function showOk(){
alert("You Agreed.")
}
function showCancel(){
    alert("You cancel your execution.")
}
ask("Do you agree ?",showOk,showCancel)


function ask1(question,yes,no){
    if(confirm(question))yes();
    else no()
}
ask1(
    "Are you agreed?",
    function(){ alert("You Agreed")  },// this type of function called anonymous
    function(){ alert("You Cancel your execution")}
)

let age=prompt("Enter you age: ",18);
let welcom;
if(age>18){
    welcom=function(){
        alert("Hello!")
    };
}else{
    welcom=function(){
        alert("Greetings!")
    }
}
welcom()
// alternative program

let age1=prompt("Enter again your aga: ",20);
let welcom2=(age>20)?
function(){alert("Hello!")}:
function(){alert("Greetings!")};
welcom2();