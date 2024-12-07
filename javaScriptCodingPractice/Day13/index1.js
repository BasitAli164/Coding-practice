function add(a,b){
    if(b===undefined){
        b=15;
    }
    document.write(`The sum of ${a} and ${b} is ${a+b}<br>`)
}
add(5);
add(3,0)
add(4+2,45);


function displayMessage(text){
    text=text||"Don't give anything";
    document.write(`The message is: ${text}<br>`)
}
displayMessage();
displayMessage("Hello World");

function displayAge(age){
    document.write(age??"You don't have an age <br>") //  ?? is called nullish coalescing operator. It returns the first non-null value.
}
displayAge();
displayAge(23);
displayAge(null);