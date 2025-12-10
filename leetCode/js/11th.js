function towSum(arr, target) {
    // arr.sort((a,b)=>a-b) // if sort is required
    console.log("array is: ",arr)
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    if (arr[left] + arr[right] == target) return [arr[left], arr[right]];
    else if (arr[left] + arr[right] > target) right--;
    else if (arr[left] + arr[right] < target) left++;
    
  }
  return 0;
}
console.log("Tow sum is: ", towSum([1, 6, 3, 12, 8], 20));


function duplicateValue(arr){
    let left=0,right=1,count=1;
    while(left<right){
        if(arr[left]!=arr[right]){
            
        }
    }
}

