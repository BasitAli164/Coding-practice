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
    let sum=0
    for(let y=0;y<=10;y++){
    
        sum+=y;
    }
    document.write("<br>total number is: ",sum)

    let reuslt=0; let x=1;

    do{
        reuslt+=x;
        x++;
        
    }while(x<=100)
        document.write(" <br>the result is : ",reuslt);


    let addition = 0;

    while (true) {
    
      let value = +prompt("Enter a number", '');
    
      if (!value) break; // (*)
    
      addition += value;
    
    }
    alert( 'Sum: ' + addition ); 

for(let t=0;t<=10;t++){
    if(t==4)break
    document.write("<br>The value of t is : ",t)
}

for (let c=0;c<=10;c++){
    if(c%2==0)continue;
    document.write("<br>The value of c is : ",c)
}