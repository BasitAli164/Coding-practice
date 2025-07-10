console.log(typeof  Number) // function 
console.log(typeof new Number)// object
console.log(typeof Number(9))// Number
console.log(typeof Number(" "))// Number
console.log(typeof Number("kjdfkajdsfk")) //Number  

let str="hello";
console.log(str.toUpperCase())
let n=12.34343434343;
console.log(n.toFixed(3))

let task1="hello";
task1.test=5;
alert(task1.test) // undefine