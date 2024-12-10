import React from 'react'
import './App.css'
import User from './components/User'

const App = () => {
  const sayHi=()=>{
    alert("Hii")
  }
  return (
    <div>
      <h1>Hello world!</h1>
      <button className='button' onClick={sayHi}>Click Me</button>
      <User/>

      
    </div>
  )
}

export default App
