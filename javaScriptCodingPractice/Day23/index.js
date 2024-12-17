// Advance level methods
//for each;
let arr=[1,2,3,"Basit"];
arr.forEach((item)=>{
    console.log(item)
})

let newArr=arr.forEach((item)=>{
    return item

})
console.log("New array:",newArr)

arr.forEach((item,index,arr)=>{
    console.log("Items are:",item)
    console.log("Index are:",index)
    console.log("Arr is:",arr)
})