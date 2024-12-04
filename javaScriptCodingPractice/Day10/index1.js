document.write("hello world")
let i=1;
while(i<=2){
    alert(i);
    i++
}
let j=1;
while(j<=8){
    document.write("<br>Loop is itrating ......");
    j++;
}
let k=1;
while(k<=10){
    document.write("<br>The value of i is : ",k)
    k++
}
let a=10
while(a>=1){
    document.write("<br>The value of a is : ",a);
    a--
}
let b=10;
do{
    document.write("<br>The value of b is : ",b);
    b++
}while(b<=20);
let x=0;
do{
    let sum=0;
    sum=sum+x;
    document.write("<br> Sum of : ",sum);
    x++;
}while(x<11);