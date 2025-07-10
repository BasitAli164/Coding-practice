// Switch Case:
let a=2+2;
switch(a){
    case 0: document.write("Too Samll....")
    break;
    case 2: document.write("near to value....")
    break;
    case 4: document.write("Excellent: the value is match.....")
    break;
    case 10: document.write("Too large......")
    break;
    default:document.write("Invalid Number.")
}
let b=2;
switch(b){
    case 0: document.write(" <br>Too Samll....")
    case 2: document.write(" <br>near to value....")
    case 4: document.write(" <br>Excellent: the value is match.....")
    case 10: document.write(" <br>Too large......")
    default:document.write(" <br>Invalid Number.")
}

let a1 = "1";
let b1 = 0;

switch (+a1) {
  case b1 + 1:
    alert("this runs, because +a is 1, exactly equals b+1");
    break;

  default:
    alert("this doesn't run");
}
// Grouping case:
let name="Basit";
switch(name){
    case "ali": document.write("<br>My father name is Ali");
    break;
    case "Basit":
    case "Basit Ali": document.write("<br>My name is Basit Ali ");
    break;
    case "Muhammad":document.write("<br> My brother name is  Muhammad Ali")
    break;
    default:
        document.write("Wrong name!")
}
// another code
let arg = prompt("Enter a value?");
switch (arg) {
  case '0':
  case '1':
    alert( 'One or zero' );
    break;

  case '2':
    alert( 'Two' );
    break;

  case 3:
    alert( 'Never executes!' );
    break;
  default:
    alert( 'An unknown value' );
}
// Task
let browser=prompt("Enter your favorate Browser Name: ");
if(browser=="Edge"){
    document.write("<br>Welcom to Edge Browser!")
}
else if(browser=="chrome"){
    document.write("<br>Welcome to Chrome Browser")
}
else if(browser=="Firefox"){
    document.write("<br>Welcome to Firefox Browser")

}
else if(browser=="Safari"){
    document.write("<br>Welcome to Safari Browser")

}
else if(browser=="Brave"){
    document.write("<br>Welcome to Brave Browser")
}
else if(browser=="opera"){
    document.write("<br>Welcome to Opera Browser")

}
else{
    document.write("<br> We hope you enjoying in our website..")

}
// task
let agr=prompt("agr?",'');
switch(agr){
  case '0': document.write("<br>You give in prompt: ",agr);
  break;
  case '1': document.write("<br>You give in prompt:",agr);
  break;
  case '2':
  case '3':document.write("<br>You give in prompt: ",agr)
  break;
  default: document.write("<br>You don't give any prompt")
}