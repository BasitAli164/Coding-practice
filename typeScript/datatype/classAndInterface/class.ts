//! class in type Script
//? here we understand about the how class syntax and write some method(fucntion) and attribute(variable)
class deparment{
    name:string="Computer Science";
    display(){
        console.log("Department name is: ",this.name)
    }
}
let instance=new deparment();
instance.display();

//? know in this school example of class we explore the constructor and access specifiers(private,public, and readonly)
class School{
    public name:string; // don't required the public because it by default apply
    private  stroll:number=304; // this is not access outside of the class
    private readonly sgender:string="male" // through readonly we can only initialize once time 
    // sgender="king" // this create an error because we set it value and don't modify it again and this is not modify through the modifier meany inside any function we cann't modify it
    constructor(n:string){
        this.name=n
    }
    show(){
        console.log("Uninversity name is :",this.name)
        console.log("Roll  number is:",this.stroll)
    }
}
let inst=new School("University of Baltistan")
inst.show();


//? in this example we explore the inheritence

class Student extends School{ // through the extends we put/store all the attribute and method into Student class so we can access all attributes and methods of the School through Student and that attributes and methods also access which we are define or declare or used or write in the Student class    

    sAddress:string;
    constructor(n:string){
        super("Hi, How are you")
        this.sAddress=n
    }
    display(){
        this.show()
        console.log(this.sAddress)
    }
    
    
}
let stud=new Student("Basit Ali is working on the new concept");
stud.display()