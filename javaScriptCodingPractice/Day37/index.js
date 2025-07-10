// Try and Catch for error handling
try {
    // console.log("Try Block")
    dasfds
    // console.log("After error")

} catch (error) {
//    console.log("Catch Block") 
}

try {
    setTimeout(()=>{
        // console.log("Second example of the try-catch block with setTimeout")
    },1000)
    
} catch (error) {
    // console.log("Catch block in second example")
    
}

try {
    jdkfajs
    
} catch (error) {
    // console.log("Error object name: ",error.name)
    // console.log("Error object message: ",error.message)
    // console.log("Error object stack: ",error.stack)
    
}

// real life
// let json='{name Json}';
// let json='{age:30}'
let json='{"basit":basit}'
try {
    let user=JSON.parse(json)
    console.log("In try Block: ",user.name)

} catch (error) {
    console.log("Our apologies, the data has errors, we'll try to request it one more time." );
    console.log("Error Name is: ",error.name)
    console.log("Error Message is: ",error.message)
    
}finally{
    console.log("I am finaally")
}



try {
    console.log("first time")
    dfjsk
    console.log("second time")
} catch (error) {
    console.log("Error are : ",error)
    
}finally{
    console.log("Finally I run")
}