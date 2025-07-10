import React, { useState } from 'react'

const State = () => {
    let name="basit"
    const change=()=>{
        name="Ali"
        alert("My Name is:"+name)
    }
    let style={
        padding:"10px 48px",
        letterSpacing:"1px",
        fontSize:"20px",
        marginTop:'5px',
        backgroundColor:"#efce34",
        border:"none",
        outline:"none",
        cursor:"pointer" 

    }

  return (
    <div>
      <h1>My name is: {name}</h1>
      <button style={style} onClick={change}>Update</button>
    </div>
  )
}

export default State


const AgainState = () => {
    let [name,setName]=useState("Basit");
    const change=()=>{
        name="Ali"
        setName(name)
        alert(name)
        console.log("name is")
    }
    let style={
        padding:"10px 48px",
        letterSpacing:"1px",
        fontSize:"20px",
        marginTop:'5px',
        backgroundColor:"#123456",
        border:"none",
        outline:"none",
        cursor:"pointer" ,
        color:"#fff"

    }

  return (
    <div>
      <h1>My name is: {name}</h1>
      <button onClick={change} style={style}>Update Name</button>
      
    </div>
  )
}

export {AgainState} 

