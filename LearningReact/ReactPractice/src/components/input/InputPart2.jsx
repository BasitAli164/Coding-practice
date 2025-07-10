import React, { useState } from 'react'
import './inputPart2.css'

const InputPart2 = () => {
  const [status,setStatus]=useState(true)
  return (
    <div className='container'>
      <h1>Hide Show and Toggle</h1>
      {status?<div className='status'>Hi! I appear</div>:null}
      <div className="button">
      <button onClick={()=>setStatus(false)}>Hide</button>
      <button onClick={()=>setStatus(true)}>Show</button>\
      <button onClick={()=>setStatus(!status)}>Toggle</button>
      </div>
    </div>
  )
}

export default InputPart2
