import React, { useState } from 'react'

const FormHandling = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        isSubscribe: '',
        role: ''
    })
    const handleChange = (e) => {
        const{name,value,type,checked}=e.target;
        console.log(`Name: ${name} , Value: ${value}, Type:${type}, and Checked: ${checked}`)
        const fieldValue=type==='checkbox'?checked:value;
        setFormData({
            ...formData,
            [name]:fieldValue 
        })

    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Form Data: ",formData)
    }
    return (
        <div>
            <fieldset>
                <legend>Form Handling in React</legend>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">UserName:</label><br />
                    <input
                        type="text"
                        name='username'
                        id='username'
                        value={formData.username}
                        onChange={handleChange}
                        minLength={3}
                        maxLength={50}
                        required
                        placeholder='Enter your userName'


                    /> <br />
                    <label htmlFor="email">Email:</label><br />
                    <input
                        type="email"
                        name="email"
                        id='email'
                        value={formData.email}
                        onChange={handleChange}
                        // required
                        placeholder='Enter your Email'
                    /> <br />
                    <label htmlFor="password">Password:</label><br />
                    <input
                        type="password"
                        name='password'
                        id='password'
                        value={formData.password}
                        onChange={handleChange}
                        min={3}
                        max={20}
                        required
                        title='Password must be 3 to 20'
                        placeholder='Enter a Strong Password'

                    /> <br />
                    <label htmlFor="isSubscribe">Subscribe Now: &nbsp; &nbsp;</label>
                    <input
                        type="checkbox"
                        id='isSubscribe'
                        name='isSubscribe'
                        value={formData.isSubscribe}
                        onChange={handleChange}
                        required
                    /> <br />
                    <label htmlFor="role">Role:</label><br />
                    <select
                     name="role"
                      id="role"
                      value={formData.role}
                      onChange={handleChange}
                      >
                        <option value="">-----Select Role-----</option>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                        <option value="guest">Guest</option>
                    </select><br />
                    <input type="submit" value="submit" />

                </form>
            </fieldset>
        </div>
    )
}

export default FormHandling
