//! function return type in typeScrpt

function sum(num1:number,num2:number):number{
    return num1+num2;
}
console.log("Sum of two number is: ",sum(34,6));

function display(msg:string):void{
    console.log(msg)
}
display("This is the message...")

let functionType:Function;// now the variable functionType store only function not any other datatype so don't put any other datatype like number , string, boolean ,array,object etc....
functionType=()=>{}