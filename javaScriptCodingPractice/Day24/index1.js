//Argument key word and rest parameter;

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

const add2=(...num)=>{// rest parameter
   console.log(num)
   return num.map((item)=>{
    return item*2
   })
}
console.log("Addition :",add2(1,2,3,4,5,56));

const buyProduct=(...price)=>{
   
    let reduceMethod=price.reduce((acc,curr)=>{
        return acc+curr
    },0)
    return reduceMethod;
}
console.log("Buy 20 pen and price of one pen is 20 :",buyProduct(20,22,24,25,206,260,210))


// spread operator

//spread operator with array
const arr1=[1,2,3,4,5,6];
const arr2=["Basit","Muhammad","Sakina","Kubra","Khatija"];
const arr3=[400,...arr1,"king",...arr2,"skardu"];
console.log("Array:",arr3)
const myName="Basit Ali Abdupa";
const newarray=[...arr3,...myName];
console.log(newarray)

//spread operator with object
const user={
    name:"Aahil",
    age:23,
    gender:'m'
}
const newUser={
    ...user,
    city:"Skardu",
    ...myName
}
console.log("User Detail:",newUser);
let newCustomer=function(){
    let sum=0;
    for(let i=0;i<arguments.length;i++){
        // debugger;
        sum+=arguments[i];
    }
    return sum;
}
console.log("Sum: ",newCustomer(...arr1))
console.log("Sum: ",newCustomer(...myName))
// console.log("Sum: ",newCustomer(...user))

const restParams=(...param)=>{
    param.forEach((item)=>{
        console.log("item is:",item)
    })
}
restParams(2,3,4,5,6,7,"Basit ali ")
restParams(...arr3,...arr1)




