import React, { useState } from 'react'
import './Login.css'

const Login = () => {
    const [status, setSatus] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const handleStatus = () => {
        setSatus(!status)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <div className="container">
                <div className="header">
                    <h1>{status === true ? "SignUp Form" : "Login Form"}</h1>
                </div>
                <div className="underline"></div>
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        {status === true ? <div className='formdiv'>
                            <label htmlFor="Username:">Username:</label>
                            <input
                                type="text"
                                name="Username"
                                id="Username"
                                placeholder="Enter your username"
                                minLength={5}
                                maxLength={100}
                                title="Username must be more than 5 character"

                            />
                        </div> : null}
                        <div className='formdiv'>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email"
                                title="Email should be in proper email format"
                            />
                        </div>
                        <div className='formdiv'>
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Enter Your Password"
                                min={5}
                                max={30}
                                title="Enter a strong password"
                            />
                        </div>

                        <div className="button">


                            {
                                status === true ?
                                    <button className='isSubmitted'>SignUp</button>
                                    :
                                    <button className='isSubmitted' >Login</button>
                            }

                        </div>

                        <div className="message">
                            <p>Alredy have an account <button onClick={handleStatus}>{status === true ? "Login" : "SignUp"}</button></p>
                        </div>
                    </form>


                </div>

            </div>
        </>
    )
}

export default Login
