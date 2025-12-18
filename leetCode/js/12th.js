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

console.log("Minimum number index is: ",minNumInd([10,12,14,2,4,6,8]))
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
console.log("Minimum number index is: ",minNumInd([6,8,10,12,14,2,4]))
