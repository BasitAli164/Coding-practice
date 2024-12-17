import React from 'react'
import {dummyProducts} from './Data.js'

const Map = () => {
    const array=["Basit","Muhammad","Sakina","Ali","Safia","Khatija","Kubra"]
  return (
    <div>
        <h1>Map Method of Array in React </h1>
        <ul>
            {
                array.map((item,index)=>(
                    
              
                   <li key={index}>Name of Person {index} is: {item}</li>
                    
                ))
            }
        </ul>

        <br /><br /><br />
        <h1>Dummy product Detaia are:</h1><br /><br />
        <ul>
            {dummyProducts.map((item, index)=>{
            console.log(item);
           return (
                <li key={index}>
                    <p>Product Id: {item.id}</p>
                    <p>Product Name: {item.title}</p>
                    <p>Product Price: {item.price}</p>
                    <p>Product Description: {item.description}  </p>
                    <p>Product Category: {item.category}</p>
                    <p>Product Color: {item.color} </p>
                    <p>Product Rating: {item.rating}</p>
                    <p>Product Size: {item.availableSizes[0]}</p><br /><br />

                </li>
            )})}
        </ul>
      
    </div>
  )
}

export default Map
