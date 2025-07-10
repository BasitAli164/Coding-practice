// advance datatype of typeScript



// any

let number;
console.log("number type is:",typeof(number));
number=3;
console.log("number type is:",typeof(number));
number="basit";
console.log("number type is:",typeof(number));
number=true;
console.log("number type is:",typeof(number));
number=undefined;
console.log("number type is:",typeof(number));
number=null;
console.log("number type is:",typeof(number));
number=[12,34,"basit"];

function hello(object:any){
    console.log(object)
}
hello("34");
hello({age:34});
hello([3,34,"basit"]);
hello(undefined);
hello(null);
hello(4);



// array advance concept in typeScript

const arr:number[]=[2,3,34,2,2]
arr.forEach(val=>console.log(val*2))
let arr1:string[]=["basit","muhammad","Kubra","khatija","sakina"];
arr1.map(item=>console.log(item));

// tuples
const axis:[number,number,number]=[1,2,3];// this is the syntax of tuple
const response:[string,number]=["success",200];
const fullName:[string,string]=["basit","ali"];
// this is used to work with fixed size but the drawback is that if we add something through array method then its size automatically increase
fullName.push("king")
console.log(fullName);


// enum
enum Color{
    red,
   green,
    blue
}
console.log(Color.blue)
enum size{
    small=1,medium,large
}
console.log(size.small)
console.log(typeof size)
console.log(typeof Color)

const  enum gender{
    male,female
};
console.log(gender.female)

let gen:gender=gender.male;
console.log("gender is:",gen)


// unknown
let notSure:unknown='a'; //  this data type is used when we don't known/sure what the exact datatype 
if(typeof(notSure)=='string'){
    console.log(notSure.toUpperCase())
}
//never


function inifinitLoop():never{ // this datatype used in that situation when we don't return something, infinit loop and also used for throw error
    while(true){
        console.log("object")
    }
}
// inifinitLoop();

function throwError(message:string):never{
    throw new Error(message)

}
// throwError("Error comming..")

// void 

function logMessage(message:string):void{ // this is used with function when that don't return anything means you don't return from the function if you use this datatype
    console.log("The void function..",message)
}
logMessage("basit ali is comming")

// type inference
let str="basit" // the typescript automatically keep its type string


// type asserstion

let nums:any="basit ali";
let strg1:string=(nums as string).toUpperCase()
console.log("the str1 is:",strg1)

// union type
let id:string|number|boolean; // the id will be string or number 
id=true;
id="bsit"
id=34

function printId(id:number|string|boolean){
    console.log(id)
}
printId(3)
printId("WORKING")
printId(false  )

// type narrowing 
function printIds(id:number|string|boolean){
    typeof(id)==="string"?console.log("id is string",id.toUpperCase()):console.log("id is number",id)
}