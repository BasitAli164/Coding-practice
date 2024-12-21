import React, { useState } from 'react'
import './App.css'
import Form from './components/Form/Form'
import UseMemo from './components/ReactHook/UseMemo'

const App = () => {
  const [count,setCount]=useState(0)
  console.log("parent")
  return (
    <>
    <UseMemo/>
    <div>
      <h3>Count: {count}</h3>
      <button onClick={()=>setCount(count+10)}>Parent</button>
    </div>
    </>
  )
}

export default App
