// again from begining

// this fucntion indicate the basic data type which are string ,number ,boolean
function add1(num1:number,num2:number,msg:string,cod:boolean){
    if(cod){
        console.log(`${msg} ${num1+num2}`)
    }else{
        return num1+num2
    }
}
const n1:number=34;
const n2:number=90;
const msg:string="sum of two number is: ";
const bool:boolean=true;
add1(n1,n2,msg,bool)