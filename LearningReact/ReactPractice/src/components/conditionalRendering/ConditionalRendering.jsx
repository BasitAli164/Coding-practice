import React, { useState } from 'react'
import './ConditionalRendering.css'

const ConditionalRendering = () => {
    const [isLogin,setIslogin]=useState(false)
    const studentName=["Basit","Ali","Muhammad","Sakina","Kubra","Khatija"]

    const handleClick=()=>{
        setIslogin(!isLogin)
    }
  return (
    <>
      <div className="main">
        <h1>Conditional Rendering</h1>
      {/* <h1>{isLogin===true?"Conditional Rendering part Please Login First":"Are you not login"} </h1> 
      */
      isLogin===true?<h3>Your are Login</h3>:<h3>Please Login First</h3>
      
      }
      <button onClick={handleClick}>Toggle</button>
      <div className="body">
        {
            studentName.length >0 ?(
                
                <ul>
                            <h1 className='register'>Register Student are:</h1>

                    {
                        
                        
                        studentName.map((item,index)=>{
                       return (
                            <li key={index}>{item}</li>

                        )                            
                        })
                    }

                </ul>
            ):(
                <h2>No Student Register</h2>
            )
        }
        

        </div>
      </div>
     
    </>
  )
}

export default ConditionalRendering
