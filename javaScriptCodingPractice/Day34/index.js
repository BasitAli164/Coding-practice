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
let user={
    userName:"Basit",
    age:23,
    gender:"male"
};
let {userName,gender}=user;
console.log(`UesrName is: ${userName} and gender is: ${gender}`)

// Destructuring of object and array with rest operator
let [name1,...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
console.log(`By using the rest operator with array destructuring : ${name1} and the another part is: ${rest}`)



let option={
    title1:"Square",
    lenght:200,
    widht:400
};

let {title1,widht,lenght}=option;
console.log("By using the rest operator with object destructuring : ",title1," and another part is:",lenght,"hieght is: ",widht)



// Task of Destructuring
let users={
    name:"Basit",
        year:30,
}
let {name,year:age,isAdmin=false}=users;
console.log(`Name is: ${name}  and Year is: ${age} and the last is admin: ${isAdmin}`)


function topSalary(salaries) {

    let maxSalary = 0;
    let maxName = null;
  
    for(const [name, salary] of Object.entries(salaries)) {
      if (maxSalary < salary) {
        maxSalary = salary;
        maxName = name;
      }
    }
  
    return maxName;
  }
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

  console.log("Top Salary Person is: ",topSalary(salaries))


