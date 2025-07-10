//! Currying Function 


//? Varient-1 
// This varient work only with two fucntion e.g., sum()() 
function sum(a){
    return (b)=>{
        return a+b;
    }
}
const add=sum(2)(5)
console.log("Sum is through Currying Function :",add)


//?Varient-2
//sum(3)(3)(3)(4)(4)()

const sum1=(a)=>{
    return (b)=>{
        if(b==undefined){
            return a
        }else{
            return sum1(a+b)
            
        }
    }

}


const result=sum1(4)(3)(6)(0)(3)()
console.log("Result is :",result)
