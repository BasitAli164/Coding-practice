// Array Methods:
//splice()
let arr=["I","am","Study","abroad","Inshallah","upComming",3,"Year"]
console.log(`Before ${arr}`)
console.log(arr.length)
arr.splice(2,3,"Basit")
console.log("After apply splice method:",arr)
console.log(arr.length)

let arr2=[1,2,3,4,5,6,7,8]
arr2.splice(0,2)
console.log("Array 2 is:",arr2)
arr2.splice(length-1,"basit","muhammad","king")
console.log(arr2)

arr2.splice(3,0,"Apo Ali","Safia")
console.log("last: ",arr2)

let mix=[1,2,"Basit","ali",{age:23,gender:"male"},[1,"abc",true],false,function(){console.log("hello world")}];
console.log("Mix Array is: ",mix)
mix.splice(0,0,function(){console.log(`object`)},[12,"baist",false,{key:"value",userName:"basit"}])
console.log("Mix array part 2:",mix)




let arr3=[1,2,3,4,5,6,"aahil","king"];
console.log("Before:",arr3)
let slice=arr3.slice(1,4)
console.log("After: ",arr3)
console.log(slice.filter((item)=>{
  
  return item>2
}))


console.log(`befor splice: `,arr3)

arr3.splice(3,4,"Basit")
console.log(`splice: `,arr3)
// Array methods
let array=[1,2,3,4,5];
let arr21=["basit","Muhammad","sakina","khatija",'kubra'];
let arr31=arr21.concat(array)
console.log(arr31) 
console.log(`new trick:`,arr3.concat([true,false],"basit",3,5))

let arrary2=array.concat(["basit",true],[3,4,5],{age:23,status:true},"king ali",5,false)
console.log(`array2 is:`,arrary2)

