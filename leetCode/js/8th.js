//! add digits

let num=98;

while(num>9){
    let rem,ans=0;
    while(num!=0){
        rem=num%10;
        num=num/10;
        ans=ans+rem;
console.log("Sum of Diigit is in inner while loop :",ans)
    }
    num=ans;
}
console.log("Sum of Diigit is :",num)