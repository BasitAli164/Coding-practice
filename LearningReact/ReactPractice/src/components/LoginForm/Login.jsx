import React, { useState } from 'react'
import './Login.css'

const Login = () => {
    const [status, setSatus] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const handleChange = (e) => {
        const { name, type, value } = e.target;
        const valueType = type == "text" || "email" || "password" ? value : null;
        setFormData({
            ...formData,
            [name]: valueType
        })
    }
    const handleReset = (e) => {
        let clear = e.target.value;
        clear = "";
        setFormData(clear)

    }
    const handleStatus = () => {
        setSatus(!status)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data is:", formData)
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
                            <label htmlFor="username:">Username:</label>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                placeholder="Enter your username"
                                minLength={5}
                                maxLength={100}
                                title="Username must be more than 5 character"
                                value={formData.username}
                                onChange={handleChange}

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
                                value={formData.email}
                                onChange={handleChange}
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
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="button">


                            {
                                status === true ?
                                    <button className='isSubmitted'>SignUp</button>
                                    :
                                    <button className='isSubmitted' >Login</button>
                            }
                            <input type="reset" value="Reset" onClick={handleReset} className='isSubmitted' />

                        </div>

                        <div className="message">
                            <p>Alredy have an account: <button onClick={handleStatus}>{status === true ? "Login" : "SignUp"}</button></p>
                        </div>
                    </form>


                </div>

            </div>
        </>
    )
}

export default Login
