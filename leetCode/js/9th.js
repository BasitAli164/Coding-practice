// function reverseDigit(num){
//     let rem,ans=0;
//     while(num>0){
//         rem=num%10;
//         num=Math.floor(num/10)
//         ans=ans*10+rem

//     }
//     console.log("Answer is: ",ans)
// }

// // reverseDigit(73248)

// function powerOfTwo(num){
//     if(num<1){
//         console.log("Not comes")
//         return 0;
//     }
//     while(num>1){
//         if(num%2==1){
//             console.log("Not comes")
//             return 0;
//         }
//         num=Math.floor(num/2)

//     }
//     console.log("Comes in Power of Tow")
//     return 1;
// }
// powerOfTwo(20)


// function searchEle(arr){
//     let x=3
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==x) {
//             console.log("return : ",i);
//             return 0
        
//         }
        
//     }
//     console.log("return :",-1)
// }
// arr=[1,2,3,4,5]
// searchEle(arr)


// function reverseArray(arr){
//     let i=0;
//     let j=arr.length
//     while(i<j){
//         let tem=arr[i]
//         arr[i]=arr[j]
//         arr[j]=tem;
//         i++
//         j--
//     }
//     console.log(arr)
// }
// console.log(reverseArray([1,2,3,4,5]))

// reverseArray([1,2,3,4,5,4])


// function findMinMax(arr){
//     let x=arr[0]
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>x){
//             x=arr[i]
//         }
//     }
//     console.log("Large number in array is: ",x)
// }
// findMinMax([32,4,54,1,90])



function findMinMax(arr){
    let x=arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i]<x){
            x=arr[i]
        }
    }
    console.log("Large number in array is: ",x)
}
findMinMax([32,4,54,1,90])