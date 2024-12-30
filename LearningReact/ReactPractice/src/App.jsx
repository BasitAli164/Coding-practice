import React, { useState ,useCallback} from 'react'
import './App.css'
import UseCallBack from './components/ReactHook/UseCallBack'

const App = () => {
  console.log("Parent Component ")
    const [count,setCount]=useState(0);
    const [count1,setCount1]=useState(0);  

    const incrementCount=useCallback(()=>{
      setCount1((prev)=>prev+10)
      console.log("Use call back function ")
    },[])
  return (
    <>

    <UseCallBack increment={incrementCount}/>
    <p>Count1: {count}</p>
    <button onClick={()=>setCount(count+1)}>Increment Count</button>


    <p>Count2: {count1}</p>
    </>
  )
}

export default App
