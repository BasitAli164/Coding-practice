// again from begining
function add(num1, num2, msg, cod) {
    if (cod) {
        console.log("".concat(msg, " ").concat(num1 + num2));
    }
    else {
        return num1 + num2;
    }
}
var n1 = 34;
var n2 = 90;
var msg = "sum of two number is: ";
var bool = true;
add(n1, n2, msg, bool);
