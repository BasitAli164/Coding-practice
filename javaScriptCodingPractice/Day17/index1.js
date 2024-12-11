// String Data Type
let singleQuote='Single Quotes';
let doubleQuote="Double Quotes";
let backticks=`Backticks, ${singleQuote} and ${doubleQuote} used to express string in JavaScript`;
document.write(backticks);

let guestlist=`Guest: 
Basit
Muhammad`
alert(`${guestlist}`)
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

console.log(`The single quote in upper Case is: ${singleQuote.toUpperCase()} and lower Case is: ${singleQuote.toLowerCase()}`)
