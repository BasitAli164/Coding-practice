let user={
    name:"Basit Ali",
    age:23,
    email:"opoAli911@gmail.com"
};
function sayHi(){
    document.write(`Hello world! My name is ${user.name}.I am ${user.age} year old person`)
}
user.sayHi=sayHi;
let func=user.sayHi;
let button=document.getElementById("btn");
button.addEventListener('click',func)

let employee={
    name:"Ali",
    age:48,
    introduction(){
        alert(`My name is : ${this.name}`)

    }
}
employee.introduction();
console.log("Employee Detail:",employee);
let boss=employee;
boss.introduction();

// Task

