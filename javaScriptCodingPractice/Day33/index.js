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