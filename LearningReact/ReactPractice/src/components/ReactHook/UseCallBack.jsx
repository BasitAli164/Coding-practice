import React, { memo } from 'react'

const UseCallBack = ({increment}) => {
    console.log("Childer Comp")
  return (
    <div>
      <h1>UseCallBack Hook in React</h1>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default memo(UseCallBack)
