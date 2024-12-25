// Array Task
//Task-1
function camelize(str){
    let changeStr= str.split('-').map((word,index)=>index==0?word:word[0].toUpperCase()+word.slice(1)).join('');
    console.log("Change Str is:",changeStr);
}
camelize("background-color");
camelize("list-style-image")

//Task-2

function filterRange(arr,a,b){
    return arr.filter((item)=>{
        if(item>=a && item<=b){
            return item
        }
    })

}
let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
console.log(filterRange(arr,8,12))