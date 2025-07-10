// JSON 
let user={
    userName:"Basit",
    age:23,
    status:undefined,
    gender:'male',
    phone:['1234','343434','343434'],
    favBook:{
        bookName:"Zarbekaleem",
        author:"Dr. Iqbal",
        publishDate:Date.now(),
    },
    work:function(){
        console.log("Developer")
    }
}
console.log("Without converting in json formate: ",user)
let convertJSON=JSON.stringify(user);
console.log("After converting in Json Format: ",convertJSON)

localStorage.setItem('userData',convertJSON);
let getData=localStorage.getItem("userData")
console.log("getData is: ",getData)


let convertString=JSON.parse(convertJSON);
console.log("Converting the Stringify into the parse is: ",convertString);

// Starting Task on JSON format


//T-1
let user1 = {
    name: "John Smith",
    age: 35
  };

let convertIntoJSON=JSON.stringify(user1)
console.log("Task-1 is to convert into json format : ",convertIntoJSON);

//T-2
console.log("Task-2 is to covert into object format again the task-1: ",JSON.parse(convertIntoJSON))