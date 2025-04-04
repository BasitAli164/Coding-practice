console.log(1*"1")
console.log("1"+1)
console.log(1-"1")
console.log(1/"1")


// a=10
// console.log(a)
// var a;
// a=2
// var a;
// let a;// it generate error

const str="pakistan"

const arr=['a','b',18,'d',100,10]
const num=arr.filter((n)=>{
    if(typeof(n)==="number"){
        return n 
    }
})
const string=arr.filter((str)=>{
    if(typeof(str)==="string"){
        return str
    }
})
console.log("Number of array is:",num)
console.log("String of array is:",string)

function abc(){
    let a=19
}
console.log(abc())

