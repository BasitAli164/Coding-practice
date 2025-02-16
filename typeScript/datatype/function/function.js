"use strict";
//! function return type in typeScrpt
function sum(num1, num2) {
    return num1 + num2;
}
console.log("Sum of two number is: ", sum(34, 6));
function display(msg) {
    console.log(msg);
}
display("This is the message...");
let functionType;
functionType = (() => (console.log("object")));
