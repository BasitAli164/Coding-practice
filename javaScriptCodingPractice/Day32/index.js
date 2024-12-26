// Task-7
let userOldDetail=[
    { name: "John", surname: "Smith", id: 1,age:23 },
    { name: "Pete", surname: "Hunt", id: 2,age:20 },
    { name: "Mary", surname: "Key", id: 3,age:25 },

]
let userNewDetail=userOldDetail.map((item)=>({
    fullName:item.name+item.surname,
    id:item.id
}))
console.log("user New detail",userNewDetail);

//Task-8
function sortedByAge(arr){
    return arr.sort((a,b)=>a.age-b.age);
}
console.log("Sort by Age is: ",sortedByAge(userOldDetail))

//Task-9
function shuffle(arr){
    return arr.sort(()=>Math.random()-0.5);
}
console.log("Shuffle any array is: ",shuffle([1,2,3]))
//Task-10
function getAverage(arr){
    console.log("object",arr)
    return arr.reduce((acc,cur)=>acc + cur.age,0) / arr.length;

}
console.log(getAverage(userOldDetail))