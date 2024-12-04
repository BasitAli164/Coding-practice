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
    document.write("<br> the value of a is :",a);
    a--
}
