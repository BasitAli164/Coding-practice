// JSON 
let user={
    userName:"Basit",
    age:23,
    gender:'male'
}
console.log("Without converting in json formate: ",user)
let convertJSON=JSON.stringify(user);
console.log("After converting in Json Format: ",convertJSON)

localStorage.setItem('userData',convertJSON);
let getData=localStorage.getItem("userData")
console.log("getData is: ",getData)