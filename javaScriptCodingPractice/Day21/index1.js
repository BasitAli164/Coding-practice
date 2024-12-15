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

