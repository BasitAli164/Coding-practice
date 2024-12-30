//rest parameter, argument  variable and spread syntax
function sum(a,b){
    return a+b;
}
console.log("Sum of the number is :",sum(1,2,3,4,5))

// now using the rest params

function restParams1(...rest){
    return rest
}
console.log("Sum through rest params and what is the actual rest params is:",restParams1(1,2,34,5))

function restParams2(firstArg,...rest){
    console.log('FirstArg is: ',firstArg," and the another are in rest parmaeter is: ",rest)
    rest.forEach((item)=>{
        firstArg+=item;
    })
    return firstArg;
}
console.log("Second varient of rest parameter is: ",restParams2(1,2,3,4,5,6))

