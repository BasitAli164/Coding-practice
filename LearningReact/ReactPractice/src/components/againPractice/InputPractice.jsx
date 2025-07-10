import React, { useState } from 'react'

const InputPractice = () => {
    const [status,setStatus]=useState(true);
  return (
    <div>
        <h1>functional buttons </h1>
        {status?<div>Content</div>:null}
      <button onClick={()=>setStatus(true)}>show</button>
      <button onClick={()=>setStatus(false)}>Hide</button>
      <button onClick={()=>setStatus(!status)}>Toggle</button>
    </div>
  )
}

export default InputPractice
