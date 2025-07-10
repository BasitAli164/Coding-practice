//Set Data type

let set=new Set();
console.log("Creaet set :",set)
set.add(12);
set.add("basit");
set.add(true);
console.log("The size of the set is: ",set.size)
console.log("After adding value in the set is :",set)
console.log(set.delete(true))
console.log("AFter delete value the set is:",set)

set.forEach((item)=>{
    console.log(item)
})
set.clear();
console.log("After clear the set is: ",set)

//Tasks:
//T-1


function unique(arr){
    let set=new Set();
   for (const element of arr) {
    if(element!==set ){
        set.add(element)
    }
    
   }
return set;
}
let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O","basit","basit"
  ];
  console.log("Length of the values is :",values.length)
  console.log("The unique funtion return ",unique(values))


  function aclean(arr) {
    let obj = {};
  
    for (let i = 0; i < arr.length; i++) {
      let sorted = arr[i].toLowerCase().split("").sort().join("");
      obj[sorted] = arr[i];
    }
  
    return Object.values(obj);
  }
  
  let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
  
console.log(aclean(arr))



const user={
    userName:"basit",
    age:23,
    gender:"male"
}
console.log("user Detail is: ",user)


let convertedArr=Array.from(user.age)
console.log("The coverted: ",convertedArr)
convertedArr.push("Apo ali")
console.log("The coverted: ",convertedArr)


let map = new Map();

map.set("name", "John");
map.set("beta", "John");
map.set("beti", "John");

let keys = Array.from(map.keys());
console.log("After keys is: ",keys)

keys.push("more");
console.log("After keys is: ",keys)

