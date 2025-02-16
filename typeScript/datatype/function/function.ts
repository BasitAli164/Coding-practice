//! function return type in typeScrpt

function sum(num1:number,num2:number):number{
    return num1+num2;
}
// console.log("Sum of two number is: ",sum(34,6));

function display(msg:string):void{
    console.log(msg)
}
// display("This is the message...")

let functionType:Function;//? make sure this is not a good practice . Note: when you assign any function datatype then you must requried to tell everything about the function means how many parameter take that function and what the return type of that function
// now the variable functionType store only function not any other datatype so don't put any other datatype like number , string, boolean ,array,object etc....
functionType=()=>{} 
functionType=sum;
functionType=display
// functionType=34 error because we assign a number which is invalid for this because it take a function
// console.log(functionType(34,3)

functionType("working...") // the fucntiontype run that function which initial or assign in last ,in this case the display function work because we assign it in last 

//? the good or best practice to do the above work is
    let funtype:(a:number,b:number)=>number
funtype=sum;
console.log(funtype(3,4))

//! function types and callbacks

function addHandle(num1:number,num2:number,cb:(n:number)=>void){
    let result=num1+num2;
    cb(result)
}
addHandle(32,4,(num:number)=>{console.log(num)})


//! unknown
let userInput:unknown; // we cann't sure about what user enter in input 
userInput=34;
userInput="basit"// so you can store any type of the data inside the userInput beacuse we don't sure about the data menas which type they enter in the inputField but the limitation is that when we assign  the unknown variable (userInput) into another datatype then it is the reason of the error ,see example

let userName:string;
// userName=userInput; // this will make the cause of the error so it is the drawback of this

//! any
// it is like unknow but the main difference is that it can be assignable in another datatype beacuse through any ,it is posible , in any we can store any type of data or anything  see the same example

let adminName:any;
let string=adminName // see here are not any type of error so understood the difference between any and unknown datatype in typeScript
