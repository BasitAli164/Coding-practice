// Task of Array
//Task-1
let fruit=["Apple","Banana"];
let shoppingCart=fruit;
console.log(shoppingCart);
shoppingCart.push("Orange");
console.log("Length of Array:",shoppingCart.length)
//Task-2
let style=["jazz","blue"];
style.push="Rock-n-Roll";
style[1]="Classics"
style.shift();
style.unshift("Reggae")
style.unshift("Rap");
console.log("Style: ",style)
console.log("First Element:",style[0])
console.log("First Element:",style.at(0))
//Task-3
let arr=["a","b"];
arr.push(function(){
    // alert(this);
})
arr[2]();
//Task-4
function sumInput(){
let number=[];
while(true){
    let value=prompt("Enter a number please!",0);
    if(value===""||value===null||value===isFinite(value)) break;
    number.push(+value)
}
let sum=0;
for (const element of number) {
    sum+=element;    
}
return sum;

}
// alert("Sum is:"+sumInput())

//Task-5
function getSum(arr){
    console.log(arr)
    let sum=0;
    for(key of arr){
        if(key>0){
            sum+=key;
        }
    }
    return sum;
}
console.log("Sum of postive Number: ",getSum([1,2,3,-4,-5,4]))

//Task-6
function problem(arr,userName){
    console.log(arr," and :",userName)
    for (const element of arr) {
        if(element==userName){
            return element
        };
        
    }
}
console.log("The Problem is that: ",problem(["Basit","Ali","Sakina"],"Ali"))

//Task-7
const groceries=['milk','bread','eggs','flour','choose','sugar'];
const searchForItem=(item)=>{
    for (const element of groceries) {
        if(element===item){
            console.log("Found:",element)
            
        }  
           
    }
}
searchForItem(      'flour')
