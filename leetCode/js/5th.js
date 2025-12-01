function dublicateValue(arr) {
  let prev=0,next=1,unique=1;
  while(next<arr.length){
    if(arr[next]==arr[next-1]){
        next++
    }else{
        arr[prev+1]=arr[next]
        prev++
        unique++
        next++
    }

  }
  return unique
}

console.log(dublicateValue([1, 1, 1, 2, 2, 3, 3, 4]));
