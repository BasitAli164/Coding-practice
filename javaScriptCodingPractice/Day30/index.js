//Array Methods
// Reduce 
let reduceMethod=[1,2,3,4,5,6,7,8];
let reduceMethod2=[]
let returnValue=reduceMethod.reduce((acc,curr,index)=>{
    console.log("The index through reduce method is: ",index)
    return acc+curr},12);
let returnValue1=reduceMethod.reduce((acc,curr,index,array)=>{
    console.log("accumulator is: ",acc,"current is:",curr,"Index is: ",index,'array is:',array)
    return acc+curr

});
let returnValue2=reduceMethod2.reduce((acc,curr)=>acc+curr,1)
console.log("Apply the reduce method:",returnValue)
console.log("Apply the reduce method:",returnValue1)// this is wronge b/c we don't provide an initail value
console.log("Apply the reduce method:",returnValue2)

let returnValue4=reduceMethod.reduceRight((acc,cur,index)=>{
    console.log("the Index through reduceRight method is:",index)
    return acc+cur;
},0)
let userName="basit";

console.log(Array.isArray(reduceMethod))
console.log(Array.isArray(userName))
console.log(Array.isArray({})); 
console.log(Array.isArray([]));
console.log(Array.isArray("basit"))



