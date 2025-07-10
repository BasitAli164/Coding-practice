import React, { useState } from 'react'

const Simple = () => {
    const [status,setStatus]=useState(true);
  return (
    <div>
      <h1>Hide Show and Toggle</h1>
        {status?<div>Hi! I appear</div>:null}
      <button onClick={()=>setStatus(false)}>Hide</button>
      <button onClick={()=>setStatus(true)}>Show</button>
      <button onClick={()=>setStatus(!status)}>Toggle</button>
    </div>
  )
}

export default Simple
