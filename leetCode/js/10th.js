function reverseArr(arr) {
  let left = 0;
  right = arr.length;
  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
  }
  console.log("Reverse Array is: ", arr);
}
// reverseArr([4,32,5,73,5])

function secondMaxEle(arr) {
  ans = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (ans < arr[i]) {
      ans = arr[i];
    }
  }
//   console.log(ans);
  let second = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (ans != arr[i]) {
      for (let i = 0; i < arr.length; i++) {
        if (second < arr[i] || ans!=arr[i]) {
          second = arr[i];
          
        }
      }
    }
  }
  console.log("second",second)
}

// secondMaxEle([2, 3, 4, 53, 6, 3]); //! nahii hovaaa


function missingValue(arr,n){
    let total=0;
    let sum=Math.floor(n*(n+1)/2)
    for(let i=0;i<arr.length;i++){
        total+=arr[i]
    }

    return sum-total
}

// console.log("Miss value in array is: ",missingValue([1,2,3,4,5],6))

function rotateArrayByOne(arr){
    let lastEle=arr[arr.length-1]
    for(let i=arr.length-2;i>=0;i--){
        arr[i+1]=arr[i]
        }
        arr[0]=lastEle
        return arr
}
/*
dry run
let arr=[1,2,3,4]
console.log(arr.length)
let last=arr[arr.length-1]
console.log(last)
*/
console.log("Rotate:",rotateArrayByOne([12,3,4,54,600]))
