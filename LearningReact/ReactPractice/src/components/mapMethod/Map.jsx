import React from 'react'
import './Map.css'
import {dummyProducts} from './Data.js'

const Map = () => {
    const array=["Basit","Muhammad","Sakina","Ali","Safia","Khatija","Kubra"];
    const fruits=["Apple","banana","Pinapple","Apricot","lemon","Date","Graph","Mongoes","Wattermaleon"];
    const afterReturn=fruits.map((item,index)=><li key={index}>{item}</li>)    
  return (
    <>
    <div >
        {/*Example-2*/}
        <h1>Map Method of Array in React </h1>
        <ul>
            {
                array.map((item,index)=>(
                    
              
                   <li key={index}>Name of Person {index} is: {item}</li>
                    
                ))
            }
        </ul>

        <br /><br /><br />
        {/*Example-2*/}
        <h1>Dummy product Detaia are:</h1><br /><br />
        <ul>
            {dummyProducts.map((item, index)=>{
            // console.log(item);
           return (
                <li key={index}>
                    <p>Product Id: {item.id}</p>
                    <p>Product Name: {item.title}</p>
                    <p>Product Price: {item.price}</p>
                    <p>Product Description: {item.description}  </p>
                    <p>Product Category: {item.category}</p>
                    <p>Product Color: {item.color} </p>
                    <p>Product Rating: {item.rating}</p>
                    <p><b>Product Available Size:</b> {
                        item.availableSizes.map((size,sizeIndex)=><li key={sizeIndex}>Size {sizeIndex+1} is :{size}</li>)
                        }</p><br /><br />

                </li>
            )})}
        </ul><br /><br />
        <h1>Furits Detail:</h1>
        <ul>{afterReturn }</ul>
      
    </div>
    <div className='table'>
        <table >
            <thead >
                <th>ID</th>
                <th>Product-Name</th>
                <th>Product-Category</th>
                <th>Product-Price</th>
                <th>Product-Size</th>
                <th>Product-Rating</th>
                <th>Product-Description</th>
            </thead>
            <tbody>
                {
                dummyProducts.map((item,index)=>(
                    item.category==="women"&&
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.category}</td>
                        <td>{item.price}</td>
                        <td>{item.availableSizes[0]}</td>
                        <td>{item.rating}</td>
                        <td>{item.description}</td>
                    </tr>
                ))
                }
               
            </tbody>
        </table>
    </div>

    </>
  )
}

export default Map
