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
// enum
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
console.log(Color.blue);
var size;
(function (size) {
    size[size["small"] = 1] = "small";
    size[size["medium"] = 2] = "medium";
    size[size["large"] = 3] = "large";
})(size || (size = {}));
console.log(size.small);
console.log(typeof size);
console.log(typeof Color);
;
console.log(1 /* gender.female */);
let gen = 0 /* gender.male */;
console.log("gender is:", gen);
// unknown
let notSure = 'a'; //  this data type is used when we don't known/sure what the exact datatype 
if (typeof (notSure) == 'string') {
    console.log(notSure.toUpperCase());
}
//never
function inifinitLoop() {
    while (true) {
        console.log("object");
    }
}
// inifinitLoop();
function throwError(message) {
    throw new Error(message);
}
// throwError("Error comming..")
// void 
function logMessage(message) {
    console.log("The void function..", message);
}
logMessage("basit ali is comming");
// type inference
let str = "basit"; // the typescript automatically keep its type string
// type asserstion
let nums = "basit ali";
let strg1 = nums.toUpperCase();
console.log("the str1 is:", strg1);
// union type
let id; // the id will be string or number 
id = true;
id = "bsit";
id = 34;
function printId(id) {
    console.log(id);
}
printId(3);
printId("WORKING");
printId(false);
// type narrowing 
function printIds(id) {
    typeof (id) === "string" ? console.log("id is string", id.toUpperCase()) : console.log("id is number", id);
}
