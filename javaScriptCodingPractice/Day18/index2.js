// Method of fruit
//Implementation of stack data structure by using array in JavaScript:
let fruit=[];
fruit.push("Apple");
fruit.push("Banan");
fruit.push("PinApple");
console.log("After pushing data in Array:",fruit);
fruit.pop()
console.log("After pushing data in Array:",fruit);

// Implementation of queue data structure by using arry in JavaScript
let user=[];
user.unshift("Basit");
user.unshift("Muhammad");
user.unshift("Khatija");
user.unshift("Sakina");
user.unshift("Kubra");
user.unshift("Safia");
user.unshift("Ali");
console.log("User Detail:",user);
user.shift()
console.log("User Detail:",user);

//Implementation of deque data structure by using an array in JavaScript

let course=[];
course.push("Programming Fundamental");
course.push("Object Oriented Programming");
course.unshift("Data Strcuture and Alogorithm");
course.unshift("Introduction to Database");
course.push("Networking");
course.unshift("Operating System");
console.log(course)
course.pop();
course.shift()
console.log(course)
course.pop();
course.pop();
console.log(course)
