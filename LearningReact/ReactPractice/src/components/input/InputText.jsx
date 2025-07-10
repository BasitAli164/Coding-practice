import React, { useState } from 'react'

const InputText = () => {
    const [value,setValue]=useState('');
    const [show,setShow]=useState(false);
    const handleChange=(event)=>{
        console.log(event)
        console.log(event.target.value)
        setValue(event.target.value)
    }
    const handleClick=(e)=>{
        setShow(true);
        e.defaultPrevented();

    }
   
  return (
    <div>
        <fieldset>
            <legend>Input Text in React</legend>
            <form action="" method=''>
                <label htmlFor="">Name:</label><br />
                <input 
                type="text"
                placeholder='Enter Your Name' 
                onChange={handleChange}
                /> <br />
                <input type="submit" value="save" onClick={handleClick} />
            </form>
        </fieldset>
        <h1>Value is: {show?value:''}</h1>
    </div>
  )
}

export default InputText
