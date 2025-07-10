function add(a,b){
    if(b===undefined){
        b=15;
    }
    document.write(`The sum of ${a} and ${b} is ${a+b}<br>`)
}
add(5);
add(3,0)
add(4+2,45);


function displayMessage(text){
    text=text||"Don't give anything";
    document.write(`The message is: ${text}<br>`)
}
displayMessage();
displayMessage("Hello World");

function displayAge(age){
    document.write(age??"You don't have an age <br>") //  ?? is called nullish coalescing operator. It returns the first non-null value.
}
displayAge();
displayAge(23);
displayAge(null);

// retrun 
function sum(a,b){
    return a+b;
}
console.log("The sum of 2 and 3 is:",sum(2,3)); // 5

//mini project on reuturn function
function basicArithmetic(a,b,operator){
    if(operator==="+"){
        return a+b;
    }
    else if(operator==="-"){
        if(a>b){
            return a-b;
        }else{
            return b-a;
        }
    }
    else if(operator==="*"){
        return a*b;
    }else if(operator==="/"){
        if(a>b){
            return a/b;
        }else{
            return b/a;
        }
    }
    else if(operator==="%"){
        if(a>b){
            return a%b;
        }else{
            return b%a;
        }
    }
    else if(operator=="^"){
        if(a>b){
            return Math.pow(a,b)
        }else{
            return Math.pow(b,a);
        }

    }
    else{
        return "Invalid operator"
    }
}
document.write("<br>The sum of 5 and 4 is: ",basicArithmetic(5,4,"+"))
document.write("<br>The subtarction of 5 and 4 is: ",basicArithmetic(5,4,"-"))
document.write("<br>The subtarction of 5 and 14 is: ",basicArithmetic(5,14,"-"))
document.write("<br>The multiplication of 5 and 4 is: ",basicArithmetic(5,4,"*"))
document.write("<br>The division of 5 and 4 is: ",basicArithmetic(5,4,"/"));
document.write("<br>The division of 5 and 14 is: ",basicArithmetic(5,14,"/"));
document.write("<br>The modulus of 5 and 4 is: ",basicArithmetic(5,4,"%"));
document.write("<br>The modulus of 5 and 14 is: ",basicArithmetic(5,14,"%"));
document.write("<br>The power of 5 and 4 is: ",basicArithmetic(5,4,"^"));
document.write("<br>The power of 5 and 14 is: ",basicArithmetic(5,14,"^"));


function checkAge(age){
    if(age>18){
        return true
    }else{
        return confirm("Do you have permission from your parents?")
    }
}
let age=prompt("Enter your age: ",18);
if(checkAge(age)){
    document.write("<br>Access Granted")
}else{
    document.write("<br>Access denied")
}

function doNothing() {
confirm("This funciton is not an empty function")
return; // empty return also empty
}

alert( doNothing() === undefined ); // true

// return function rule
function ruleOfReturn(){
     
    "basit"+2;
}
console.log("Rule-1",ruleOfReturn())
function rule2OfReturn(){
    return;
    "basit" + "ali"
}
console.log("Rule 2:",rule2OfReturn())
function rule3OfReturn(){
    return(
        "basit"
        +
        "Ali"
    )
    "is it print..."
}
console.log("Rule 3: ",rule3OfReturn())

//Task
function min(a,b){
    if(a<b){
        return a;
    }else if(a>b){
        return b;
    }else{
        return "Invalid parameter"
    }
}
document.write("<br>The minimum value is: ",min(4,5))

function pow(x,n){
    return x**n
}
document.write("<br>The power is: ",pow(2,3))