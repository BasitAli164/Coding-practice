//! find the peak index of mountain 

//? bruteforce solution of this problem 
// time complexity of this program is O(n)
function maxNumberIndex(arr){
  let max=arr[0], index=0;
  for(let i=1;i<=arr.length;i++){
    if(arr[i]>max){
      max=arr[i]
      index=i
    }
  }
  return index

}



//? optimize solution of this problem 
// time complexity of this program is O(logn)
function maxNumberIndex2(arr){
  let max=arr[0],left=0,right=arr.length-1;
  while(left<=right){
    mid=Math.floor((left+right)/2)
    if(arr[mid]>max){
      max=arr[mid]
      left=mid+1
    }
    else{
      right=mid-1
    }
  }
  return max
}
// console.log("Max number index is: ",maxNumberIndex([2,4,6,8,10,12,14,8,5,3])) // bruteforce  approach
// console.log("Max number index is: ",maxNumberIndex2([2,4,6,8,10,12,14,8,5,3]))// optimize approach



//! find minimum value fromm the rotate array


//? using bruteforce approach
// time complexity is O(n)
function minNumInd(arr){
    min=arr[0]
    for(let i=1;i<=arr.length-1;i++){
        if(arr[i]<min){
            min=i
        }
    }
    return min;
}

// console.log("Minimum number index is: ",minNumInd([10,12,14,2,4,6,8]))
//? using optimize approach
function minNumInd2(arr){
    let min=arr[0],left=0,right=arr.length-1
    while(left<=right){
        mid=Math.floor((left+right)/2)
        if(arr[mid]<min){
            min=mid
            right=mid-1
        }else{
            left=mid+1
        }
    }

    return min

}
// console.log("Minimum number index is: ",minNumInd([6,8,10,12,14,2,4]))


const towSumWithDuplicate=function(arr,target){
  let left=0,right=arr.length-1
  while(left<=right){
    if(arr[left]+arr[right]==target){
      left++
      right--
      while(arr[left]==arr[left-1]){
        left++
      }
      while(arr[right]==arr[right+1]){
        right--
      }
    }
    else if(arr[left]+arr[right]>target){
      right--
    }else{
      left++
    }
  }
  return [arr[left],arr[right]]

}
console.log("Two sum with dublicate value is: ",towSumWithDuplicate([1,1,1,2,2,2,3,3,3],3))




//? bruteForce approach
function findTripletSum(arr){

  for(let i=0;i<=arr.length-1;i++){
    for(let j=i+1; j<=arr.length-1;j++){
      for(let k=j+1;k<=arr.length-1;k++){
        if(arr[i]+arr[j]+arr[k]==0){
          return [arr[i],arr[j],arr[k]]
        }
      }
    }
  }
  return -1
}
// console.log("Triplate sum is:",findTripletSum([1,1,1,-2,3,4,-4]))