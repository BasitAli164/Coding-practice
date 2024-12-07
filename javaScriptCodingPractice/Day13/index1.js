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
        return true;
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