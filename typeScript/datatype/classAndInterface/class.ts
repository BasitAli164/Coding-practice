//! class in type Script
class deparment{
    name:string="Computer Science";
    display(){
        console.log("Department name is: ",this.name)
    }
}
let instance=new deparment();
instance.display();

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
