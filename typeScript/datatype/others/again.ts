// again from begining
function add(num1:number,num2:number,msg:string,cod:boolean){
    if(cod){
        console.log(`${msg} ${num1+num2}`)
    }else{
        return num1+num2
    }
}
const n1=34;
const n2=90;
const msg="sum of two number is: ";
const bool=true;
add(n1,n2,msg,bool)