"use strict";
//! class in type Script
//? here we understand about the how class syntax and write some method(fucntion) and attribute(variable)
class deparment {
    name = "Computer Science";
    display() {
        console.log("Department name is: ", this.name);
    }
}
let instance = new deparment();
instance.display();
//? know in this school example of class we explore the constructor and access specifiers(private,public, and readonly)
class School {
    name; // don't required the public because it by default apply
    stroll = 304; // this is not access outside of the class
    sgender = "male"; // through readonly we can only initialize once time 
    // sgender="king" // this create an error because we set it value and don't modify it again and this is not modify through the modifier meany inside any function we cann't modify it
    constructor(n) {
        this.name = n;
    }
    show() {
        console.log("Uninversity name is :", this.name);
        console.log("Roll  number is:", this.stroll);
    }
}
let inst = new School("University of Baltistan");
inst.show();
//? in this example we explore the inheritence
class Student extends School {
    sAddress;
    constructor(n) {
        super("Hi, How are you");
        this.sAddress = n;
    }
    display() {
        this.show();
        console.log(this.sAddress);
    }
}
let stud = new Student("Basit Ali is working on the new concept");
stud.display();
