"use strict";
// advance datatype of typeScript
// any
let number;
console.log("number type is:", typeof (number));
number = 3;
console.log("number type is:", typeof (number));
number = "basit";
console.log("number type is:", typeof (number));
number = true;
console.log("number type is:", typeof (number));
number = undefined;
console.log("number type is:", typeof (number));
number = null;
console.log("number type is:", typeof (number));
number = [12, 34, "basit"];
function hello(object) {
    console.log(object);
}
hello("34");
hello({ age: 34 });
hello([3, 34, "basit"]);
hello(undefined);
hello(null);
hello(4);
// array advance concept in typeScript
const arr = [2, 3, 34, 2, 2];
arr.forEach(val => console.log(val * 2));
let arr1 = ["basit", "muhammad", "Kubra", "khatija", "sakina"];
arr1.map(item => console.log(item));
// tuples
const axis = [1, 2, 3]; // this is the syntax of tuple
const response = ["success", 200];
const fullName = ["basit", "ali"];
// this is used to work with fixed size but the drawback is that if we add something through array method then its size automatically increase
fullName.push("king");
console.log(fullName);
