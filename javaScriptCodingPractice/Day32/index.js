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



let map=new Map();
console.log("map is: ",map)
map.set(true,"Apo k beta")
map.set(1,100,"name","king");
console.log("After set the map is:",map)
map.values()
console.log("After apply the values method on map: ",map)
map.forEach((item,index,map)=>{
    console.log("item through the forEach: ",item," and the index or keys are:",index, " and the map is: ",map)
})
console.log("the map has the key: ",map.has(true))
console.log("the map delete method is: ",map.delete(1))
console.log("After delete :",map)
map.set("age",23)
map.set("gender","male")
console.log("map entries methods is :",map.entries())
map.clear();
console.log("After clear the map is:",map)

let map2=new Map(userOldDetail);
console.log(map2)


