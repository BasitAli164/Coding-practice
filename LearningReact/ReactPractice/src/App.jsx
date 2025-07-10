import React, { useState ,useCallback} from 'react'
import './App.css'
import CustomHook from './components/ReactHook/CustomHook/CustomHook'

const App = () => {
  const {count,increment,decrement}=CustomHook(10,100);
 
  return (
    <>
    <h1>Through Custom Hook the count value is: {count}</h1>
    <button style={{margin:"30px"}} onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>

    </>
  )
}

export default App
