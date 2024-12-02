// Task
//Task-1
if("0"){
    alert("Hello")
}

//Task-2
let question=prompt("What is the 'Official' name of JavaScript ?");
if(question=="ECMAScript" || question=="EcmaScript"){
    document.write("Right!")
}else{
    document.write("You don't know ?<br> ECMAScript!")
}

//Task-3

let number=prompt("Enter a number: ",0);
if(number>=1){
    document.write("<br>",number," is a Positive number!")
}else if(number<=-1){
    document.write("<br>",number," is a Negative number!")

}else if(number==0){
    document.write("<br>",number," is equal to zero!")

}else{
    document.write("<br> You don't press any number !")
}