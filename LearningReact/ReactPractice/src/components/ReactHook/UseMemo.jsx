import React, { memo, useMemo, useState } from 'react'

const UseMemo = () => {
    const [num1 ,setNum1]=useState(0);
    const [num2 ,setNum2]=useState(0);
    const [count ,setCount]=useState(0);
    console.log(`Children`)

    const sum=useMemo(()=>{
        
        console.log(`Calculating sum..........!`);
        return num1+num2
    },[num1,num2])

  return (
    <div>
        <h1>useMemo Hook in React </h1>
        <div>
            <input type="number" name="" id="" value={+num1} onChange={(e)=>setNum1(Number(e.target.value))} />
            <input type="number" name="" id="" value={+num2} onChange={(e)=>setNum2(Number(e.target.value))} />
            <p>{sum}</p>
        </div>
        <div>
            <h2>Count: {count}</h2>
            <button onClick={()=>setCount(count+1)}>Increment </button>
        </div>
      
    </div>
  )
}

export default memo(UseMemo)
