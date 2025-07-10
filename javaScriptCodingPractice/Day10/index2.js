for(let i=1;i<3;i++){
    for(let j=1;j<3;j++){
        document.write("<br>The value of i is:- ",i,"  and j is:- ",j)
    }
}

outer:
for(let k=0;k<15;k++){
    console.log("hello....",k)
    for(let m=0;m<10;m++){
        if(m>=5)break
        console.log("inner.....")
    }
}
// task
let a=3
while(a){
    alert(a--);
    
}
// post and pre fix
for(let i=10;i<=12;i++){
    console.log("the value of i is:",i)
    document.write("<br> The value of i is: ",i)
}
for(let j=10;j<=12;++j){
    console.log("The value of j is:", j)
    document.write("<br> The value of i is: ",j)

}
for(let even=0;even<10;even+=2){
    document.write("<br>the even number is: ",even)
}
for(let i=0;i<21;i++){
    if(i%2==0){
        document.write("<br>The even number is: ",i)
    }
}

let x=0;
while(x<4){
    alert(`Number is ${x}`)
    x++
}

let num;
do{
    num=prompt("Enter a number greater than 100: ",0)
    console.log("num is: ",num)
}while(num<=100 && num);


let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  alert( i ); // a prime
}