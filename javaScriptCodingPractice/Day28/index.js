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
];
let serachingUser=users.find((item)=>{
    return item.id>1;
});
console.log(`User is: ${serachingUser}`)
console.log("User is: ",serachingUser)