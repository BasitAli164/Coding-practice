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

