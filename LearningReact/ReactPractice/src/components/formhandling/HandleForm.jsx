import React, { useState } from 'react'
import './HandleForm.css'

const HandleForm = () => {
  const[formData,setFormData]=useState({
    email:'',
    password:''
  });
  const handleChange=(e)=>{
    const{name,value,type}=e.target;
    const typeValue=type==="email"||"password"?value:null;
    setFormData({
      ...formData,
      [name]:typeValue
    })
    

  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("Form Data: ",formData)
  }
  return (
    <>
    <div className="main">
      <fieldset>
        <legend>Form Handling</legend>
        <form onSubmit={handleSubmit} >
          <div className="email">
          <label htmlFor="email">Email:</label>
          <input
           type="email"
           id='email'
           name='email'
           placeholder='Enter Your Email'
           value={formData.email}
           onChange={handleChange}
           />
          </div>
          <div className="password">
            <label htmlFor="passowrd">Password:</label>
            <input 
            type="password" 
            name="password" 
            id="password" 
            placeholder='Enter Your Password'
            value={formData.password}
            onChange={handleChange}
            />
          </div>
          <div className="submit">
            <input type="submit" value="submit"  />
          </div>
        </form>
      </fieldset>
    </div>
      
    </>
  )
}

export default HandleForm
