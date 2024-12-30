//Recursion
let company = {
    sales: [{
      name: 'John',
      salary: 1000
    }, {
      name: 'Alice',
      salary: 1600
    }],
  
    development: {
      sites: [{
        name: 'Peter',
        salary: 2000
      }, {
        name: 'Alex',
        salary: 1800
      }],
  
      internals: [{
        name: 'Jack',
        salary: 1300
      }]
    }
  };
  let array=[5000,2000,3000]
  function sumOfSalaries(department){
    // console.log("Company is comes here:",department)
    if(Array.isArray(department)){
        return department.reduce((prev,current)=>{
            console.log("currnet",current)
            return prev+current.salary;
        },0)
    }else{
        let sum=0;
        for (const element of Object.values(department)) {
            console.log("element is:",element)
            sum+=sumOfSalaries(element); 
            console.log("sum is: ",sum)           
        }
        return sum;
    }
  }
  console.log("Detail are:",sumOfSalaries(company))