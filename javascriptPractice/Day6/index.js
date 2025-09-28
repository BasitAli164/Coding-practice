const arr=["basit","kng"];

function checkSubString(arr) {
    let arr1=arr[0].split("")
    let arr2=arr[1].split("")
    let flag=false;

    for(let i=0;i<arr2.length;i++){
        if(arr1.includes(arr2[i])){
            flag=true
        }else{
            flag=false
            console.log("false is done")
        }
    }
    return flag
    
}

console.log(checkSubString(arr))