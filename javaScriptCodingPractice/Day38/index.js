//! Currying Function 


//? Varient-1
function sum(a){
    return (b)=>{
        return a+b;
    }
}
const add=sum(2)(5)
console.log("Sum is through Currying Function :",add)


//?Varient-2

