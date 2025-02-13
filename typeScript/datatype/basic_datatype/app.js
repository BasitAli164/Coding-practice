"use strict";
// Normal/Basic datatype in typescript which are same with javaScript
//number
let num = 34;
console.log("num is:", num);
let num1 = 4545454;
console.log("num1 is:", num1);
let num2 = 324324324234234n;
console.log("num2 is: ", num2);
//string
let firstName = "basit";
let lastName = "ali";
firstName = "Akram";
console.log(`fullName is: ${firstName}${lastName}`);
//boolean
let ispending = true;
let loading = false;
//undefinded
let variable = undefined; // this is for the undefined
let variable1 = undefined; // this is demonstrate for any
// null
let variable2 = null; // this is also demonstrate for any data type
let variable3 = null; // this is for the null data type
// Array
let mix = [
    3,
    45,
    343,
    56,
    "basit",
    false,
    undefined,
    null,
    { name: "basit" },
    [234, "basti"],
];
let onlyNumber = [3, 4, 45];
onlyNumber.push(34);
onlyNumber.push(0);
let onlyString = ["king", "false"];
let onlyBool = [true, false];
// object
let obj = {
    name: "basit",
    rollNo: 34,
    status: true,
};
console.log("type of", typeof obj);
let obj1 = {
    name: "ali",
    rollNo: 34,
};
console.log("type 1 of", typeof obj1);
let obj2 = {
    age: 34,
    name: "basit",
    status: false
};
let variable4 = ["king", "ali"];
console.log("variable 4", variable4);
let variable5;
console.log("Type of the variable  5 is:", typeof variable5);
console.log("Type of the variable  5 is:", variable5);
