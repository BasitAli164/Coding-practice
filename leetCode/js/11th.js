function towSum(arr, target) {
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    if (arr[left] + arr[right] == target) return [arr[left], arr[right]];
    else if (arr[left] + arr[right] > target) right--;
    else if (arr[left] + arr[right] < target) left++;
    else return 0;
  }
}
console.log("Tow sum is: ", towSum([1, 3, 6, 8, 12], 14));
