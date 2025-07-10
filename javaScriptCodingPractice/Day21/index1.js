// Challenge-1
const reverseString=(str)=>{
    return str.split("").reverse().join("");
}
console.log(reverseString("Basit"))
console.log(reverseString("Muhammad"))
console.log(reverseString("Hello"))
console.log(reverseString("Apple"))
console.log(reverseString("elppa"))


//Challenge-2

const palindromes=(str)=>{
    let palin=str.split('').reverse().join('');
    if(palin===str){
        console.log(str," is a palindrome")
    }else{
        
        console.log(str," is not  a palindrome")
    }
}
palindromes("aabb");
palindromes("1221")
palindromes("basit")
palindromes("bbaabbaabb")

//Challenge-3
const numberReverse=(num)=>{
    let str= String(num).split("").reverse().join('');
    return Number(str)
}
console.log(numberReverse(1212 ))

// Challenge-4

const numberPalindrom=(num)=>{
    let str=String(num).split('').reverse().join('');
    return num===Number(str)?"Palindrom":"Not Palindrom";

}
console.log(numberPalindrom(1221))
console.log(numberPalindrom(1111))

// Challenge-5
const capitalizeStr=(str)=>{
    return str.toLowerCase().split(' ').map((word)=>word[0].toUpperCase() + word.slice(1)).join('');
}
// console.log(capitalizeStr("basit Ali ")
// )

// Challenge-6
const FizzBuzz=()=>{
    let num=prompt("Enter a number: ",0)
    console.log(typeof +num)
    for(i=1;i<=+num;i++){
        console.log("Number is basit: ",i)
        if(i%3==0){
            console.log(i," is a Fizz")
        }
        else if(i%5==0){
            console.log(i," is a Buzz")
        }
        else if(i%3==0&&i%5==0){
            console.log(i," is a FizzBuzz")
        }else{
            console.log('Number is :',i)
        }
    }
}
FizzBuzz();

//Challenges-7
const arrayChunks=(array,size)=>{
    let newArray=[];
    let index=0;
    while(index<array.length){
        let chunks=array.splice(index,index+size);
        console.log("--------",chunks)
        newArray.push(chunks);
        index+=size
    }
    return newArray
}
console.log(arrayChunks([12,3,4,5,7,8,9,5,3,1],2))

// Challenge-8
const targetIndex=(array,target)=>{
    for(i=0;i<array.length;i++){
        for(j=i+1;j<array.length;j++){
            if(array[i]+array[j]===target){
                return [i,j]
            }
        }
    }
    return []
}
console.log(targetIndex([3,2,14,5,6],5))

