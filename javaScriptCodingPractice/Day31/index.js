// Array Task
//Task-1
function camelize(str){
   return str
          .split('-')
          .map((word,index)=>{
            return index==0?word:word[0].toUpperCase()+word.slice(1)
          })
          .join('');
}
console.log(camelize("background-color"))
console.log(camelize("list-style-image"))

//Task-2

function filterRange(arr,a,b){
    return arr.filter((item)=>{
        if(item>=a && item<=b){
            return item
        }
    })

}
let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
console.log(filterRange(arr,8,12))

// Task-3
let filterRangePlace=(arr,a,b)=>{
    return arr.filter((item)=>{
        if(item==a || item==b){
            return item
        }
    })
}
console.log("Filter Place: ",filterRangePlace(arr,2,1))

//Task-4
let sortingDecreasing=[5,2,1,-10,8].sort((a,b)=>b-a);
console.log("Sorting in Decreasing Order: ",sortingDecreasing)

//Task-5
let sortedFun=function(arr){
    return arr.sort();
}

let sortingPurpose = ["HTML", "JavaScript", "CSS"];
console.log("Sorted Array is: ",sortedFun(sortingPurpose));

//Task-6
let user=[
    {name:"basit",age:23},
    {name:"ALI",age:23},
    {name:"kiyan",age:23},
]

let convert=user.map((item)=>{
    return item.name.split('').join('')
})
console.log("Coverted array is: ",convert);
