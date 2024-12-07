// function 
function showMessage1(){
    alert("My name is Basit Ali...")
}
showMessage1();

function showMessage2(){
    let message="Hellow World! I am JavaScript"; // local variable
    alert(message);
}
showMessage2()

let userName="Basit Ali"; // outer variable
function showMessage3(){
    let message="Hello "+userName;
    document.write(message)
}
showMessage3()