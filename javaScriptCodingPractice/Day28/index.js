// find/findIndex/findlastIndex
let users=[
    {
        id:1,
        userName:"basit"
    },
    {
        id:2,
        userName:"muhammad"
    },
    {
        id:3,
        userName:"Sakina"
    },
    {
        id:4,
        userName:"kahtija"
    },
    {
        id:5,
        userName:"kubra"
    },
    {
        id:6,
        userName:"Basit"
    }
];
let serachingUser=users.find((item)=>{
    return item.id>1;
});
console.log(`User is: ${serachingUser}`)
console.log("User is: ",serachingUser)

let serachfindIndex=users.findIndex((item)=>{
    return item.userName==="Sakina"&& item.id===3
})
let serachfindIndex1=users.findIndex((item)=>{
    return item.id===9
})
let serachfindIndex2=users.findIndex((item)=>{
    return item.id===1
})

console.log("Index of Sakina is: ",serachfindIndex)// return 2
console.log("Index of id 9 is: ",serachfindIndex1) // -1 because not found
console.log("Index of id 1 is: ",serachfindIndex2) // return 0

let throughFilter=users.filter((item)=>{
    return item.id==1;
})

let throughFilter1=users.filter((item)=>{
    return item.id>1
})
let throughFilter2=users.filter((item)=>{
    return item.id>10
})
console.log("Through filter id equal to 1 is:",throughFilter);
console.log("Through filter id > 1 is:",throughFilter1);
console.log("Through filter id > 10 is:",throughFilter2);// retrun [] because there no element which are id>10


let array=[1,3,4,"basit","aahil"];

let mapMethod=array.map((item)=>{
    return item.length
})

let mapMethod2=array.map((item)=>{
    if( Number(item)){
        return item*3
    }
});

console.log("Length of each item through map method:",mapMethod)
console.log("Length of each item through map method:",mapMethod2)