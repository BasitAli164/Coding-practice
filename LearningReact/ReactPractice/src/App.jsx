import React, { useState } from 'react'
import './App.css'
import Memo from './components/ReactHook/Memo'
const App = () => {
  const [count,setCount]=useState(0);
  console.log(`From Parent`)
  return (
    <div>
      <Memo/>
      <h3>{count}</h3>
      <button onClick={()=>setCount(count+1)}>Click me</button>
    </div>
  )
}

export default App
