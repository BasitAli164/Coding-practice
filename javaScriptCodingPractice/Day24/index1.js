function add(a,b){
    console.log(`Value of a is ${a} and b is: ${b}`);
    console.log("Argument keyword: ",arguments);
    return a+b
}
console.log(`Sum :${add(1,2,3,4,5,7)}`);

const multiply=function(){
    let product=1;
    for(let i=0;i<arguments.length;i++){
        product*=arguments[i];

    }
    return product;
}
console.log("Multiply: ",multiply(1,2,3));