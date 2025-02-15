// again from begining

// this fucntion indicate the basic data type which are string ,number ,boolean
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

// object data type in typescript
let user: {
  name: string;
  age: number;
} = {
  name: "basit",
  age: 34,
};
console.log(user.age);
// array in object
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


// array datatype in typescript
let favLanguage:string[]; // through this you can store only one datatype of the data in the array mean in this case you add or store data only string type
favLanguage=["Balti","shina","urdu"];
console.log(favLanguage);


let skills:any[]; // if you want to add any datatype of data inside the array then you use the any datatype of the typescript but it is not a better approach ,through this approach you lose the powre of the typescript because this is alos done with javascript so the purpose of the typescript is fail so don't use or avoid this approach more ,i recommend the solution  in below as soon as possible!

skills=[34,"basit",true,[34,false],{age:34}]
console.log(skills)


// tupple datatype in typescript