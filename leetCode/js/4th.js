const towSum=function(arr,target){
    let left=0,right=arr.length-1
    while(left<right){
        if(arr[left]+arr[right]==target){
            return {left,right}
        }
        else if(arr[left]+arr[right]<target){
            left+=1
        }
        else if(arr[left]+arr[right]>target){
            right-=1
        }
        else{
            console.log("Not sum is found")
        }
    }

}

console.log(towSum([2,4,6,5],9))