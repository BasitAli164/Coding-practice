//! again from begining

//! string ,number ,boolean
function add1(num1: number, num2: number, msg: string, cod: boolean) {
  if (cod) {
    console.log(`${msg} ${num1 + num2}`);
  } else {
    return num1 + num2;
  }
}
const n1: number = 34;
const n2: number = 90;
const msg: string = "sum of two number is: ";
const bool: boolean = true;
add1(n1, n2, msg, bool);

//! object data type in typescript
let user: {
  name: string;
  age: number;
} = {
  name: "basit",
  age: 34,
};
console.log(user.age);
//! array in object
let employee:{
    name:string;
    age:number;
    status:boolean;
    employeeDetail:{
        employeeId:number;
        salar:number;
        employeeDestination:string;
        attendence:boolean,
        address:string,
        skill:string[],
        phoneNo:number[]

    }
}={
    name:"basit",
    age:30,
    status:true,
    employeeDetail:{
        employeeId:301,
        attendence:false,
        employeeDestination:"CEO",
        salar:983343,
        skill:["HTML","CSS","Js"],
        address:"Kushmarah Gound",
        phoneNo:[123223,2323232,3434343,454545]


    }
}
console.log(employee)


//! array datatype in typescript
let favLanguage:string[]; // through this you can store only one datatype of the data in the array mean in this case you add or store data only string type
favLanguage=["Balti","shina","urdu"];
console.log(favLanguage);


let skills:any[]; // if you want to add any datatype of data inside the array then you use the any datatype of the typescript but it is not a better approach ,through this approach you lose the powre of the typescript because this is alos done with javascript so the purpose of the typescript is fail so don't use or avoid this approach more ,i recommend the solution  in below as soon as possible!

skills=[34,"basit",true,[34,false],{age:34}]
console.log(skills)


//! tupple datatype in typescript
let student:{
    sName:string;
    sReg:number;
    sCourse:[number,string,number,string]// this is tuple which is fixed array means you don't add more than what you define in that array which you define or declare and the format must be same what you declare in the sCourse means index 0 has a number  type data,1 has string type data and etc but the drawback is that when we apply any data method then the sCourse modified
}={
    sName:"Basit Ali",
    sReg:12,
    sCourse:[1,"DSA",2,"DAA"]
}
student.sCourse.push('Basit')
console.log(student.sCourse)


//! enum

enum Role{Admin,User,Author};
const person3:{
    name:string;
    age:number,
    role:Role
}={
    name:"basit ali",
    age:23,
    role:Role.Admin
}
if(person3.role===Role.Admin){
    console.log("Admin")
}else if(person3.role===Role.Author){
    console.log("Author")
}else{
    console.log("User")
}

//! union

function combine(num1:number|string,num2:number|string){// this type of the datatype used when we want or add  on variable flexibility mean i want a single variable take number or string both in single varible see in above or example to more understand 
    if(typeof(num1)==="number"&& typeof(num2)==="number"){
        return num1+num2
    }else{
        return num1.toString()+num2

    }
}
console.log(combine(3,4));
console.log(combine('basit','king'));


//! literal type
//? this is used when we don't use the typescript data type ,instead of it we make our own datatype ,see more example

function combine1(num1:number|string,num2:number|string,myDatatype:'as-somthing'|'as-someone'){
    // the as-something and as-someone are our data type ,the arugment must be same as the parameter
    if(typeof num1==='number'&&typeof num2==='number'||myDatatype=='as-somthing'){
        return +num1+ +num2;

    }else{
        return num1.toString()+num2

    }
}
console.log(combine1(3,34,"as-somthing"))



//! type-alias or custome types
//? we make type-alias for our easyness means we don't write the string ,we wirte place of the string as str so there we use this technique
//without alias type we write or use the core datatype which provide the typeScript
function display(msg:string|number){
    console.log(msg)
}
display("Hellow Mr.Basit Ali")

// now we use the type -alias 
//? syntax: 
        // type yourTypeName=typeScript datatype
type msgDataType=string|number;
function show(msg:msgDataType){ // through the type-alias we replace whole string|number with msgDataType so it is easy for writing or write 
    console.log(msg)
}
show(34);
// pros or advantage of the alias type
const teacher:{ // without using alias
    teacherId:number;
    name:string;
    address:string;
    ph:number;
    attendance:boolean;
}={
    name:"Apo ali",
    address:'Gound, Skardu',
    teacherId:12,
    ph:3434343,
    attendance:true
}
console.log("Teacher is:",teacher);

type teacherType={ // here we define an alias type
    teacherId:number;
    name:string;
    address:string;
    ph:number;
    attendance:boolean;

}
let teachers:teacherType={ // here we use that alias which easy to write and it is also reuseable anywhere we want to  age create teachers object 
    teacherId:3434,
    address:"Pakistan",
    attendance:false,
    name:"Basit Ali",
    ph:343894839    
}

function greet1(teacher:teacherType){
    console.log(`Welcom Mr. ${teacher.name}`)
}
greet1(teachers);