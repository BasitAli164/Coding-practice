//  Array Methods:
//forEach()
[1,2,3,4,"basit",true,[3,true,],{age:23}].forEach((item)=>{
    console.log(item)
    // alert(item)
})
// for each element call alert
// ["Bilbo", "Gandalf", "Nazgul"].forEach((item)=>{
//     alert(item)
// });

let arr=[1,2,3,4];
arr.forEach((item,index)=>{
    // console.log(`item is: ${item} and index is: ${index}`)
})

let arr2=[true,'basit',23,undefined,null];
arr2.forEach((item,index,arr)=>{
    console.log("item is: ",item, "index is:",index,"", "and"," array is :",arr)
})

let search=[1,2,3,4,"apple","banana",true,false,1,NaN]
console.log(`By using indexOf:  ${search.indexOf("apple")}`)
console.log(`By using indexOf:  ${search.indexOf("applee")}`)
console.log(`By using indexOf:  ${search.indexOf(1)}`)
console.log(`By using lastindexOf:  ${search.lastIndexOf(1)}`)
console.log(`By using includes:  ${search.includes(1)}`)
console.log(`By using includes:  ${search.includes("basit")}`)
console.log(`By using includes:  ${search.includes(NaN)}`)