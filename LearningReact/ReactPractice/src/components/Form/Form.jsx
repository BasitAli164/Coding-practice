import React, { useState } from 'react'
import { Col, Container, Row, Table,  } from 'react-bootstrap'
import {toast,ToastContainer} from 'react-toastify';

const Form = () => {
    const [userData,setUserData]=useState([]);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone: '',
        message: '',
        index: ''

    })

   
    let getValue=(e)=>{
        let oldData={...formData};
        let getName=e.target.name;
        let getValue=e.target.value;
        oldData[getName]=getValue;
        setFormData(oldData)
        

    }

  
    let handleSubmit=(e)=>{
        e.preventDefault();
        let currentUserFormData={
            username:formData.username,
            email:formData.email,
            phone:formData.phone,
            message:formData.message,
        }
        let checkDuplicateValue=userData.filter((item)=>item.email==formData.email || item.phone==formData.phone)

    if(checkDuplicateValue.length==1){
        toast.error("Email or Phone already exits !")
        console.log("hie")
    }
    else{
        let oldData=[...userData,currentUserFormData] //old array + new array element
        setUserData(oldData)
        console.log(`User Detail: ${oldData}`)
        setFormData({
            username: '',
            email: '',
            phone: '',
            message: '',
            index: ''

        })
    }

       
    }

    
    let deleteRow=(indexNumber)=>{
        let filterDataAfterDelete=userData.filter((item,index)=>index!=indexNumber)
        toast.success("Data delete")
        setUserData(filterDataAfterDelete)

    }

    return (
        <Container fluid>
            <Container>

                <Row>
                    <Col className='text-center py-5'>
                        <h1>Inquiry Now</h1>

                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <form onSubmit={handleSubmit} >
                            <div className="pb-3">
                                <label className='form-label'>Name:</label>
                                <input
                                    type="text"
                                    name="username"
                                    id="name"
                                    className='form-control'
                                    value={formData.username}
                                    onChange={getValue}
                                />
                            </div>
                            <div className="pb-3">
                                <label className='form-label'>Email:</label>
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    className='form-control'
                                    value={formData.email}
                                    onChange={getValue}


                                />
                            </div>
                            <div className="pb-3">
                                <label className='form-label'>Phone:</label>
                                <input
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    className='form-control'
                                    value={formData.phone}
                                    onChange={getValue}
                                />
                            </div>
                            <div className="pb-3">
                                <label className='form-label'>Message:</label>
                                <textarea
                                    type="text"
                                    name="message"
                                    id="message"
                                    className='form-control'
                                    rows={3}
                                    value={formData.message}
                                    onChange={getValue}
                                />
                            </div>
                            <div className="pb-3 text-center">
                                <button className='btn btn-primary text-center' >
                                    {
                                        formData.index!==""?"Update":"Save"
                                    }
                                </button>

                            </div>
                        </form>
                    </Col>
                    <Col lg={8}>
                    <Table striped bordered hover>
                    <thead>
                    <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Message</th>
                    <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                    userData.length>0?
                    userData.map((item,index)=>(
                     <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.message}</td>
                    <td>
                    <button className='btn btn-secondary mx-2' onClick={()=>deleteRow(index)}>Delete</button>
                    <button className='btn btn-secondary mx-2'>Edit</button>
                    </td>
                    </tr>
                    ))
                   :
                    <tr>
                    <td colSpan={6}>No Data Found</td>
                    </tr>
                    }
                    </tbody>
                    
                    </Table>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Form
