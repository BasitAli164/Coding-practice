import React from 'react'
import './Login.css'

const Login = () => {
    return (
        <>
            <div className="container">
                <div className="header">
                    <h1>Login form</h1>
                </div>
                <div className="underline"></div>
                <div className="form">
                    <form >
                        <div className='formdiv'>
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
                        </div>
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
                            <button className='isSubmitted'>Login</button>
                            <button className='isSubmitted'>SignUp</button>
                        </div>


                    </form>
                </div>

            </div>
        </>
    )
}

export default Login
