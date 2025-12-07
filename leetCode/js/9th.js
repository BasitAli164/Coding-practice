function reverseDigit(num){
    let rem,ans=0;
    while(num>0){
        rem=num%10;
        num=Math.floor(num/10)
        ans=ans*10+rem

    }
    console.log("Answer is: ",ans)
}

reverseDigit(73248)