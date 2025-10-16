const toSum=function(arr,target){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]==target){
                console.log(`Sum of  ${arr[i]} and ${arr[j]} is :${arr[i]+arr[j]} which is eqaul to target value ${target}`)
                return [i,j]
            }
        }
    }

}

console.log(toSum([2,3,4,5],8))
