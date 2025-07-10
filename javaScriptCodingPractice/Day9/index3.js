// Login page:
let userName=prompt("Enter you userName: ");
if(userName=="admin"){
    let password=prompt("Password!");
    if(password=="12345"){
        alert("Welcom !")
    }else if(password==''||password==null){
        alert("I don't know you")

    }else{
        alert("Cancel")
    }
}
else if(userName==''||userName==null){
    alert("I don't know you")
}else{
    alert("Cancel")
}