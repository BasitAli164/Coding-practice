
  
  // We want the for..of to work:
  // for(let num of range) ... num=1,2,3,4,5
  /*To make the range object iterable (and thus let for..of work) we need to add a method to the object named Symbol.iterator (a special built-in symbol just for that).
  
  When for..of starts, it calls that method once (or errors if not found). The method must return an iterator – an object with the method next.
  Onward, for..of works only with that returned object.
  When for..of wants the next value, it calls next() on that object.
  The result of next() must have the form {done: Boolean, value: any}, where done=true means that the loop is finished, otherwise value is the next value.
  Here’s the full implementation for range with remarks:
  */
  let range = {
    from: 1,
    to: 5
  };
  
  // 1. call to for..of initially calls this
  range[Symbol.iterator] = function basit(a,b) {
  
    // ...it returns the iterator object:
    // 2. Onward, for..of works only with the iterator object below, asking it for next values
    return {
      current: this.from,
      last: this.to,
  
      // 3. next() is called on each iteration by the for..of loop
      next() {
        // 4. it should return the value as an object {done:.., value :...}
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  };

console.log(`range is:`,range)

for (const element of "Basit Ali") {
    console.log(element)
}

let str="Basit";
let iterator=str[Symbol.iterator]();
while(true){
    let result=iterator.next();
    if(result.done)break;
    console.log("Value is: ",result.value);

}
const user={
    fullName:"Basit Ali",
    age:23,
    status:true,
}

let array=[];
console.log("array is:",array)
let convertedArray=Array.from(user);
console.log("Converted Array is 1:",convertedArray)
console.log("Type of converted array is: ",typeof convertedArray)
convertedArray.push("male");
console.log("Converted Array is:",convertedArray)
console.log("user:",user)