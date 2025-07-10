import React from 'react'
import './User.css'

const User = () => {
    let userDetail=`User Name is: Basit \n UserAge: 23 \nEmail: AbduPa911@gmail.com\nGender: Male`;
    let userFunc=()=>{
        alert(userDetail)
    }
   
  return (
    <div>
      <h1 >User Detail</h1>
      <button className='btn' onClick={userFunc}>Click to Display user Detail</button>

    </div>
  )
}

export default User
