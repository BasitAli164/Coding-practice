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

// object
let user: {
  name: string;
  age: number;
} = {
  name: "basit",
  age: 34,
};
console.log(user.age);

let employee:{
    name:string;
    age:number;
    status:boolean;
    employeeDetail:{
        employeeId:number;
        salar:number;
        employeeDestination:string;
        attendence:boolean

    }
}={
    name:"basit",
    age:30,
    status:true,
    employeeDetail:{
        employeeId:301,
        attendence:false,
        employeeDestination:"CEO",
        salar:983948398439489384938,


    }
}
console.log(employee)