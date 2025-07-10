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

// Rounding decimal number 
let number=23.234;
console.log("Apply Math.floor on Number: ",Math.floor(number))
console.log("Apply Math.ceil on number: ",Math.ceil(number))
console.log(`Apply Math.round on Number: ${Math.round(number)}`)
console.log(`Apply Math.trunc on Number: ${Math.trunc(number)}`)
console.log(`Apply number.tofixed on Number: ${number.toFixed(1)}`)

if(0.1+0.3===0.4){
    console.log(0.1+0.3)
    alert(true)
}


let str="12$"
let str1="12.3 PRs."
console.log("The dolloar is:",parseInt(str))
console.log("The the pak rupees is:",parseFloat(str1))
console.log("The url is:",parseInt("https://en.wikipedia.org/wiki/IEEE_754",36))



//Task:
//Method-1
let a=prompt("Enter first number:");
let b=prompt("Enter Second number:");
let sum=a+b;
alert(`Sum of ${a} and ${b} is: ${parseInt(a)+parseInt(b)}`)

let c=+prompt("Enter a number: ",0);
let d=+prompt("Enter a number: ",0);

alert(`Sum of ${c} and ${d} is: ${c+d}` )

//task2
function readNumber(){
    let num;
    do{
        num=prompt("Enter a number pleaes? :",0);

    }while(!isFinite(num));
    if(num===null || num==='') return null

    return +num;
}
alert(`Read: ${readNumber()}`);



