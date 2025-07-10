// interface
interface Person{ // this is used when we defind our own datatype with speicfic data type of typescript
    name:string,
    age:number,
    greet:()=>void
}
function greet(){
    console.log("object")
}
let person:Person={
    name:"basit",
    age:34,
    greet

}
console.log(person.greet())


interface mathOp{
    (a:number,b:number):number
}
const add:mathOp=(x,y)=>x+y;
console.log(add(2,3))


// type alias 
// type aliasName=TypeDefinitio :- it is the syntax of the type alias
type userId=string; // through this we make our custome or change the any datatype of the typescript with our custome name

let myName:userId="Apo ali";
console.log("my name is :",myName)


type person2={
    name:string,
    age:number
}
let person1:person2={
    name:"abc",
    age:34
}
console.log(person1.age)


type Id=number|string|boolean;

let names:Id="basit"
let exp:Id=34;
let statuss:Id=true
console.log(names,exp,statuss)