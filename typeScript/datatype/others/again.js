"use strict";
// again from begining
// this fucntion indicate the basic data type which are string ,number ,boolean
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
// object
let user = {
    name: "basit",
    age: 34,
};
console.log(user.age);
