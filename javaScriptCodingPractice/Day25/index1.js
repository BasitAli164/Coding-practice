// Destructuring 
const array=[1,2,3,"Basit","Sakina",'Khatija',"Kubra"];
const [index1,index2,index3,index4]=array;
console.log(`Index1: ${index1} Index2: ${index2} Index3: ${index3} Index: ${index4}`)

const [,,,,index5]=array;
console.log(`Index5: ${index5}`)

const user={
    name:"basit",
    age:23,
    gender:'m',
    phoneNo:"03419468911"
}
const {age,phoneNo}=user;
console.log(`Age:: ${age} PhoneNo: ${phoneNo}`)

function obj({name,age}){
console.log(`Name and Age in object is: ${name} ${age}`)
}
obj(user)
function arr([a,b,c,,,f]){
    console.log(`array is: ${a} ${b} ${c} ${f}`)
}
arr(array)