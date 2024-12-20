import React, { useState } from 'react'
import './App.css'
import Memo from './components/ReactMemo/Memo'
import UseMemo from './components/ReactMemo/UseMemo';
const App = () => {
  const [count,setCount]=useState(0);
  console.log(`From Parent`)
  return (
    <div>
      <Memo/>
      <h3>{count}</h3>
      <button onClick={()=>setCount(count+1)}>Click me</button>
      <UseMemo/>
    </div>
  )
}

export default App
