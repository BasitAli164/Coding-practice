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



