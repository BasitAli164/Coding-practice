import React from 'react'

const Product = (props) => {
  return (
    <div className='container'>
        <div className="media">
            <img src="" alt="" />
        </div>
        <div className="mediaContent">
            <h4>Product Name: {props.productName}</h4>
            <h4>Product Price: {props.productPrice}</h4>
        </div>
    </div>
  )
}

export default Product
