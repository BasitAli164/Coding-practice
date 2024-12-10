import React from 'react'
import './App.css'
import User from './components/User'
import State, { AgainState } from './components/State'

const App = () => {
  const sayHi=()=>{
    alert("Hii")
  }
  return (
    <div>
      <h1>Hello world!</h1>
      <button className='button' onMouseOver={sayHi}>Click Me</button>
      <User/>
      <State/>
      <AgainState/>

      
    </div>
  )
}

export default App
