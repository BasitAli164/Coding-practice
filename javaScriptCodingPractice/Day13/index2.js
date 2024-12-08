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

document.write(funcExpression())