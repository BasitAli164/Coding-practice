//!  Pattern

// for(let i=1;i<4;i++){
//     for(let j=1;j<6;j++){
//         console.log("*")
//     }
// }


function decimalToBinary(num) {
    let rem,ans=0,mul=1;
    while(num){
       rem=num%2
       num=num/2
       ans=ans+(rem*mul)
       mul=mul*10
    }
    console.log("Answer is:",ans)
    return 0;
    
}
decimalToBinary(12)