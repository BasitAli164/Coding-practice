function towSum(arr, target) {
  // arr.sort((a,b)=>a-b) // if sort is required
  console.log("array is: ", arr);
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    if (arr[left] + arr[right] == target) return [arr[left], arr[right]];
    else if (arr[left] + arr[right] > target) right--;
    else if (arr[left] + arr[right] < target) left++;
  }
  return 0;
}
// console.log("Tow sum is: ", towSum([1, 6, 3, 12, 8], 20));

function duplicateValue(arr) {
  let left = 0,
    right = 1,
    count = 1;
  while (right < arr.length) {
    if (arr[left] != arr[right]) {
      arr[left + 1] = arr[right];
      count++;
      left++;
      right++;
    } else {
      right++;
    }
  }
  console.log("Unique Ele exit in array:", count);
}
// duplicateValue([1,1,1,1,1,2,2,2,3,3,4,4,5])

function binarySearch(arr, key) {
  let left = 0,
    mid,
    right = arr.length - 1;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (arr[mid] == key) {
      return mid;
    } else if (arr[mid] > key) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10));

function findTarget(arr, target) {
  console.log("object");
  let left = 0,
    right = arr.length - 1,
    temp = [];
  console.log("left:", left, "right:", right);
  while (left <= right) {
    // console.log("object1")

    if (arr[left] == target) {
      console.log("object2");

      temp.push(left);
      left++;
    } else if (arr[right] == target) {
      temp.push(right);
      right--;
    } else {
      console.log("ab");
    }
  }
  return -1;
}
console.log(findTarget([5, 7, 7, 8, 8, 9], 8));
