let billion=1000000000;
let billion2=1_000_000_000; // both are same ,this achive through syntax sugar
console.log("Billion 1: ",billion," and Billion 2:",billion2)

// for short hand practice to generate positive number 
let billion3=1e9;
console.log(`Billion 3: ${billion3}`)
let billion4=1.3e9;
console.log(`Billion 4: ${billion4}`)

let billion5=1234e6;
console.log("Billion 5:",billion5)

//for negative number
let mcs=0.000001;
console.log(`The value of mcs: ${mcs}`)
let mcs2=1e-6;
console.log(`The value of mcs2: ${mcs2}`)

//Hex,binary and octal numbers
let hex1=0xff,hex2=0xabcd;
console.log(`value of hex1: ${hex1} and value of hex2: ${hex2}`)

let binary1=0b1010101010, binary2=0b101;
console.log(`Value of binary1: ${binary1} and value of binary2: ${binary2}`);

let octal1=0o123,octal2=0o7653;
console.log(`Value of octal 1: ${octal1} and value of Octal 2: ${octal2}`)

// toString(base) method ,base from 2 to 36
let num=255;
console.log("255 with base 2 is: ",num.toString(2))
console.log("255 with base 3 is: ",num.toString(3))
console.log("255 with base 4 is: ",num.toString(4))
console.log("255 with base 10 is: ",num.toString(10))
console.log("255 with base 8 is: ",num.toString(8))
console.log("255 with base 16 is: ",num.toString(16))
// Tow dot operator
console.log("Two dot operator to call any function in JS :",122132..toString(2))

