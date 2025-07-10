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

// Argument

function argumentVariable(parmaeter){
    console.log("Argument variable is:",arguments)
}
argumentVariable(); 


let arr=[1,2,3,4,5,0,2,4,6,7];
console.log("Maximum number is: ",Math.max(...arr))

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];
console.log( Math.max(...arr1,0,4, ...arr2,43,33) );


let str="basit ali";
console.log(...str)
console.log("Spread syntax: ",[...str])


// setTimeout and setTimeInterval

setInterval(() => {
    console.log("By using set interval")
    
}, 1000);
// clearTimeout(1000)

setTimeout(() => {
    console.log("By using the setTimeout")
}, 3000);
