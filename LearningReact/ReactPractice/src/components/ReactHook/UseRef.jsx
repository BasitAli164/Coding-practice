import React, { useRef, useState } from 'react'

const UseRef = () => {
    const inputRef=useRef(null);
    const [word ,setWord]=useState('');
    const handleNext=(e)=>{
      console.log("e is:",e)
      console.log("e target",e.target)
      console.log("e target",e.target.value)
      setWord(e.target.value)
    }
    
    
    const hnadleButton=()=>{
      const initalValue=inputRef.current.value;
      console.log("Inital  value is: ", initalValue)
      console.log("current is :",inputRef.current)
      console.log("value is :",inputRef.current.value)
      
    }

  return (
    <div>
      <h1>useRef Hook in React</h1>
      <input type="text" ref={inputRef}  />
      <input type="text" name="" id="" placeholder='next' value={word} onChange={handleNext} />
      <button onClick={hnadleButton}>Get InputValue </button>
      i
   </div>
  )
}

export default UseRef
