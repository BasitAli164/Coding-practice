"use strict";
//! again from begining
//! string ,number ,boolean
function add1(num1, num2, msg, cod) {
    if (cod) {
        console.log(`${msg} ${num1 + num2}`);
    }
    else {
        return num1 + num2;
    }
}
const n1 = 34;
const n2 = 90;
const msg = "sum of two number is: ";
const bool = true;
add1(n1, n2, msg, bool);
//! object data type in typescript
let user = {
    name: "basit",
    age: 34,
};
console.log(user.age);
//! array in object
let employee = {
    name: "basit",
    age: 30,
    status: true,
    employeeDetail: {
        employeeId: 301,
        attendence: false,
        employeeDestination: "CEO",
        salar: 983343,
        skill: ["HTML", "CSS", "Js"],
        address: "Kushmarah Gound",
        phoneNo: [123223, 2323232, 3434343, 454545]
    }
};
console.log(employee);
//! array datatype in typescript
let favLanguage; // through this you can store only one datatype of the data in the array mean in this case you add or store data only string type
favLanguage = ["Balti", "shina", "urdu"];
console.log(favLanguage);
let skills; // if you want to add any datatype of data inside the array then you use the any datatype of the typescript but it is not a better approach ,through this approach you lose the powre of the typescript because this is alos done with javascript so the purpose of the typescript is fail so don't use or avoid this approach more ,i recommend the solution  in below as soon as possible!
skills = [34, "basit", true, [34, false], { age: 34 }];
console.log(skills);
//! tupple datatype in typescript
let student = {
    sName: "Basit Ali",
    sReg: 12,
    sCourse: [1, "DSA", 2, "DAA"]
};
student.sCourse.push('Basit');
console.log(student.sCourse);
//! enum
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Author"] = 2] = "Author";
})(Role || (Role = {}));
;
const person3 = {
    name: "basit ali",
    age: 23,
    role: Role.Admin
};
if (person3.role === Role.Admin) {
    console.log("Admin");
}
else if (person3.role === Role.Author) {
    console.log("Author");
}
else {
    console.log("User");
}
//! union
function combine(num1, num2) {
    if (typeof (num1) === "number" && typeof (num2) === "number") {
        return num1 + num2;
    }
    else {
        return num1.toString() + num2;
    }
}
console.log(combine(3, 4));
console.log(combine('basit', 'king'));
