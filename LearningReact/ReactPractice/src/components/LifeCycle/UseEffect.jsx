import React, { useEffect } from 'react'

const UseEffect = () => {

    //example-1
    useEffect(()=>{
        alert("UseEffect Hook")

        console.log("Use-Effect Hook")
    })
  return (
    <div>
      <h1>Use Effect Hook </h1>
    </div>
  )
}

export default UseEffect
