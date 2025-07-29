let days=["Sunday","Wednesday","Tuesday","Friday"]

let index=days.findIndex((day)=>day==="monday")
let index1=days.findIndex((day)=>day==="sunday")

// console.log("Index: ",index, "\n","Index 1: ",index1)


let number=[1,2,3,4,5,6,7]

const include=number.includes(2)
// console.log("Include: ",include)

number.splice(1,4,3)
console.log("Array : ",number)