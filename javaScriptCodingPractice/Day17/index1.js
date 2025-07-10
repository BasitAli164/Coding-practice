// String Data Type
let singleQuote='Single Quotes';
let doubleQuote="Double Quotes";
let backticks=`Backticks, ${singleQuote} and ${doubleQuote} used to express string in JavaScript`;
document.write(backticks);

let guestlist=`Guest: 
Basit
Muhammad`
// alert(`${guestlist}`)
document.write(`<br>Length of Guest is: ${guestlist.length}`)
document.write(`<br>Length of Guest is: ${singleQuote.length}`)
//String methods
//i-at()
console.log("Access single Character from single quotes",singleQuote[2])
console.log("Access single Character from single quotes",singleQuote.at(2))
console.log("Access single Character from single quotes",singleQuote.at(-1))
console.log("Access single Character from single quotes",singleQuote.at(-5))
console.log("Access single Character from single quotes",singleQuote[-5])

//for .. of loop
for(let char of singleQuote){
    console.log("Charactier in SingleQuote: ",char)
}
//Changing Case Methods
console.log(`The single quote in upper Case is: ${singleQuote.toUpperCase()} and lower Case is: ${singleQuote.toLowerCase()}`)
// Searching the subString in string

let str="My name is Basit Ali";
document.write(`<br>${str} indexOf: ${str.indexOf('name')} StartWith: ${str.startsWith('M')} and endsWith ${str.endsWith("Ai")} ,Now finally include Method: ${str.includes("Basit")} `);


// Getting substring:
document.write(`<br>Slice: ${str.slice(8)} or ${str.slice(1,10)}` )
document.write(`<br>Substr: ${str.substr(4,6)} or ${str.substring(1,9)}`)
document.write(`<br>Repeat: ${str.repeat('i')}`)
document.write(`Repeat: ${str.repeat(5)}`)

let text="bas,it";
text.split("a")
console.log("text is:",text.split(","))

