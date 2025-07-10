// Array
let arr=[1,2,3,4,5,6]
// alert(arr) // it amazing becuause it show the premitive data type (number ,string,boolean,array) all data inside the array

let fruit=['apple','banana','orange'];
// alert(-fruit)

let  mixArray=["Apple",{name:"Basit"},true,50,function(){alert("Hello!")},[3,[12,"ali"],4,5]]
// alert(mixArray)

let speacial=[null,undefined]
// alert(speacial) // does not show in alert the null and undefined


// Know How to Access specific element from array;

document.write(`Speacial[0]: ${speacial[0]}`)
document.write(`<br>MisArray[0]: ${mixArray[0]}`)
document.write(`<br>MisArray[1]: ${mixArray[1].name}`)// access from object inside the array
document.write(`<br>MixArray[4] ${mixArray[4]()}`) // access function 
document.write(`<br>MixArray[5] ${mixArray[5]}`) // Access array
document.write(`<br>Length of Array: ${mixArray.length}`) //find length

for (const element of mixArray) {
    console.log(element)
    
}