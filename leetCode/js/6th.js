function squareOfArray(arr){
    let newArr=[]
    for(let i=0;i<arr.length;i++){
        newArr=arr[i*i]
        console.log(newArr)

    }
    return newArr
}
console.log(squareOfArray([2,3,4,5]))




