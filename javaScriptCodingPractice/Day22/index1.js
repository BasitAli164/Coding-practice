// Challenge-9
const sumOfTwoNumber=(a,b)=>{return a+=b}
console.log("Sum of two number is: ",sumOfTwoNumber(1,2)) ;


const sumOfNthNumber=function(n){
    return n*(n+1)/2;
}
console.log(sumOfNthNumber(5))

const dynamicSum=function(){
    let n;
    do{
        let num=+prompt("Enter a number",0)
        n+=1
        num+=n;
    }while(n>0||n=='');
    return num;

}
console.log(dynamicSum())