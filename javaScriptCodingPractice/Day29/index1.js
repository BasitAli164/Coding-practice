// Array methods
//sort();

let sortingArray=[1,4,56,2,9,0,23]
console.log("Sorting array is: ",sortingArray.sort((a,b)=> a-b));
let sortingAlphbet=['n','a','s','t','c',true,false,'h','m','d'];
console.log("Sorting of alphabet: ",sortingAlphbet.sort());
let sortingNumber=[30,20,90,70,100,40,60,50]
console.log("Sorting a number :",sortingNumber.sort((a,b)=>a-b))
// reverse()
console.log("Without Reverse :",sortingArray)
console.log("Reverse the Array",sortingArray.reverse())
console.log("Reverse the second Array:",sortingAlphbet.reverse())
console.log("Reverse the third Array:",sortingNumber.reverse());

// split and join
let str="My name is Basit Ali";
console.log("Apply split method on str: ",str.split(''))
console.log("Apply split method:",str.split(''))

let introduction="My,name,is,Apo,ali".split(',');
console.log(introduction);
let str1=introduction.join('');
console.log("Apply join method: ",str1)

let userName="basit ali".split('');
console.log("User-name is:",userName)
console.log("Now convert the array intor string with the help of the join method:",userName.join(''))
