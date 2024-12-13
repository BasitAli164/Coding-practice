//Array methods
//toString Method
let arr=[1,2,3,4,5,6,7];
console.log("Array is:",arr);
// console.log("Array coverted in String :",arr.toString());
let arr1=['Basit',"Ali",`king`];
console.log("Array is:",arr1)
// console.log("Arr1 is converted into string:",arr1.toString())

let arr3=arr.concat(arr1);
console.log("Combination of Array is:",arr3);
console.log("Converte the combination of array:",arr3.toString())

let arr4=[12,3,4,"Basit",{age:43},function(){let a=4;console.log(a)},undefined,null,[12,34,"vas"]];
console.log("Array 4 is:",arr4);
console.log("Now Array 4 is converted in string:",arr4.toString())

//join Method
let arr5=[1,2,3,"Basit",{age:23},9,true,[12,3,4,"king"],function(){let a=4; console.log(a)}];
console.log("Array 5 is:",arr5)
console.log("Array 5 is:",arr5.join(" and "));

delete arr5[8]
console.log(arr5)

let arr6=arr5.concat(arr,arr1,arr3,arr4);
console.log("Concatenate all array is :",arr6)
