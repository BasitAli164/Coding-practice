"use strict";
// data type in typescript
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
let mix = [3, 45, 343, 56, "basit", false, undefined, null, { name: "basit" }, [234, "basti"]];
let onlyNumber = [3, 4, 45];
let onlyString = ["king", "false"];
let onlyBool = [true, false];
// object
let obj = {
    name: "basit",
    rollNo: 34,
    status: true
};
console.log("type of", typeof (obj));
let obj1 = {
    name: "ali",
    rollNo: 34,
};
console.log("type 1 of", typeof (obj1));
