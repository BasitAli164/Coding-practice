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