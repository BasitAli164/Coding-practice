// Date and time 
let now =new Date();
console.log("The current Date and time is: ",now)

let startDate=new Date(0); // this give us Thu Jan 01 1970 05:00:00 GMT+0500 (Pakistan Standard Time)
console.log("The starting time and date of this object is: ",startDate)



let Dec31_1969 = new Date(-24 * 3600 * 1000);
console.log("Before the starting date and time :",Dec31_1969)

let getYear=now.getFullYear()
let getMonth=now.getMonth()+1;
let getDay=now.getDay();
let getDayOfMonth=now.getDate();
console.log(`Year: ${getYear} Month: ${getMonth} Date: ${getDayOfMonth} Day: ${getDay}`);



let hours=now.getHours();
let minute=now.getMinutes();
let second=now.getSeconds();
let miliSecon=now.getMilliseconds();

console.log(`Hours: ${hours} Minutes: ${minute} Second: ${second} Mili_second: ${miliSecon}`)

