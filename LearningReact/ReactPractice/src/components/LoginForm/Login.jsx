import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <>
    <div className="container">
        <div className="header">
            <h1>Login Form</h1>
        </div>
        <div className="underline"></div>
        <div className="form">
            <form >
                <label htmlFor="Username:">Username:</label>
                <input
                 type="text" 
                 name="" 
                 id=""
                 placeholder="Enter Your Username"
                 minLength={5}
                 maxLength={100}
                 title="Username must be more than 5 character"
                 
                  />
            </form>
        </div>
        <div className="button"></div>
        
    </div>
    </>
  )
}

export default Login
