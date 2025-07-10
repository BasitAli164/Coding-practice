let x=2+1-4/3;
document.write('The value of x is ',x)

let a=3;
let b=4;
let c=3-(a=b+1); 
document.write('<br> the value of c is: ',c)


let d,e,f;
d=e=f=12;
document.write("<br> the value of d is: ",d,"<br> the value of e is: ",e,"<br> the value of f is: ",f)


let n=3;
n=n+4;
n+=10;
document.write("<br> the value of n is: ",n)


let m=5;
m*=2;
document.write("<br> the value of m is: ",m)

let p=10;
document.write("<br> the value of p is: ",++p)
document.write("<br> the value of p is: ",p++)
document.write("<br> the value of p is: ",p)

let q=10;
document.write("<br> the value of q is: ",--q)
document.write("<br> the value of q is: ",q--)  
document.write("<br> the value of q is: ",q)

// task
let h=1,g=1;
let i=++h;
let j=g++;
document.write("<br> the value of i is: ",i," the value of j is: ",j)


let l=2;
let k=1+(l*=3)
document.write("<br> the value of k is: ",k);


document.write("<br> true + false =", true+false);
document.write("<br> '' +1 +0 is :", ''+1+0);





let num1=prompt("Enter the first number:");
let num2=prompt("Enter the second number:");
alert("The sum of "+num1+" and "+num2+" is "+(parseInt(num1)+parseInt(num2)))

