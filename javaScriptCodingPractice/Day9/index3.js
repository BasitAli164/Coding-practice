// mini project (login project)
let userName=prompt("Who is there:  ", "");
if(userName=="admin"){
    let password=prompt("Password ?");
    if(password=="12345"){
        alert("Welcome Admin");
    }else if(password=="" || password==null){
        alert("Wrong password")
    }else{
        alert("Cancel")
    }
}
else if(userName==""||userName==null){
    alert("I don't know you")
}else{
    alert("Access denied")
}