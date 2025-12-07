function reverseDigit(num){
    let rem,ans=0;
    while(num>0){
        rem=num%10;
        num=Math.floor(num/10)
        ans=ans*10+rem

    }
    console.log("Answer is: ",ans)
}

// reverseDigit(73248)

function powerOfTwo(num){
    if(num<1){
        console.log("Not comes")
        return 0;
    }
    while(num>1){
        if(num%2==1){
            console.log("Not comes")
            return 0;
        }
        num=Math.floor(num/2)

    }
    console.log("Comes in Power of Tow")
    return 1;
}
powerOfTwo(20)