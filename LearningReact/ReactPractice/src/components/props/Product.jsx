import React from 'react'
// import './Product.css'

const Product = (props) => {
  return (
    <div className='container'>
         <h1>Product Card</h1>

        <div className="card">
          <div className="media">
            <img src={props.productImage} alt=""   />
        </div>
        <div className="mediaContent">
            <h4>{props.productName}</h4>
            <h4><span>$</span>{props.productPrice}</h4>
        </div>
        </div>
    </div>
  )
}

export default Product
