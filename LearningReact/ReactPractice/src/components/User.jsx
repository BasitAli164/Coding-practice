import React from 'react'

const User = () => {
    let userDetail={
        name:"Basit Ali",
        age:23,
        email:"AbduPa911@gmail.com"
    }
  return (
    <div>
      <h1 >User Detail</h1>
      <h4>UserName:{userDetail.name}</h4>
      <h4>UserAge:{userDetail.age}</h4>
      <h4>UserEmail:{userDetail.email}</h4>
    </div>
  )
}

export default User
