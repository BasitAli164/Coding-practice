// Object
//Syntax
let syntax1= new Object(); //object contructor syntax
let syntax2={};// object literal syntax

let user={
    name:"Basit Ali",
    age:23,
    "Like Birda":true,
    "my fav color":"light Green",
}
console.log("first time:" ,user)
document.write("First Object with values is: <br>",user) // it show only [object Object]
document.write("<br>Name of the user is: ",user.name)
document.write("<br>The age of the user is: ",user.age)
document.write("<br>Does the user like bird: ",user["Like Birda"])
document.write("<br> My Favourate color is: ",user["my fav color"])

delete user.age // delete age property from object
delete user["my fav color"];
console.log("Second time: ",user);

let admine={
    name:"Ali",
    age:45,
}
// let key=prompt("Enter your Name:");
// alert(user[key])
console.log(user)

// object in function ;
let makeUser=(name,age)=>{
    return{
        name:name,
        age:age,
    };
}
let userDetail=makeUser("Basit",45);
console.log(userDetail)

let makeUser2=(name,age)=>{
    return{
        name,
        age,
}
}
let userDetail2=makeUser2("Apo Ali",45)
console.log(userDetail2)

let obj={
    0:"test",
}
alert(obj[0])
alert(obj["0"])

let student={
    name:"Muhammad",
    age:12
}
console.log("Name of student in student object:","name" in student);
document.write("<br>Name of student in student object:","name" in student);

let obj1 = {
    test: undefined
  };
  
  alert("test" in obj1)
  // How to iterate any object
  let teacher={
    id:1,
    name:"Imtiaz Ahmed",
    age:50,
    gender:'male',
    status:true,

  };
  document.write("<br> Object iterate:")

  for(let key in teacher){
    document.write("<br> Key:   ",key,"     Value:    ",teacher[key])
}