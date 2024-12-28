//Destructuring in Javascript

// Array Destructuring 
let array=["basit","ali"]
let [firstName,lastName]=array;
console.log(`First Name is: ${firstName} and Last Name is: ${lastName}`)


let [firstName1, surname] = "John Smith".split(' ');
// alert(firstName1); // John
// alert(surname);  // Smith

let [Name, , ,title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
console.log(title)

// String Destruncturing
let [a,b,c,,,,,,f]="Basit Ali";
console.log("A : ",a," B: ",b," and C: ",c, " and f is: ",f)


// Object Destructuring


