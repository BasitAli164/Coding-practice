import React from 'react'
import './App.css'
import User from './components/User'
import State, { AgainState } from './components/State'
import Product from './components/props/Product'
import productImage from './assets/image/box1/shoes1.avif'
import InputText from './components/input/InputText'
import InputPart2 from './components/input/InputPart2'
import Simple from './components/input/Simple'

const App = () => {
  const sayHi=()=>{
    alert("Hii")
  }

  return (
    <div  >

      {/* <h1>Hello world!</h1>
      <button className='button' onMouseOver={sayHi}>Click Me</button>
      <User name="Basit"/>
      <State/>
      <AgainState/> */}
      
      {/* <Product productName="Laddies Shoes" productPrice={5000} productImage={productImage}/> */}

      {/* <InputText/> */}
      {/* <InputPart2/> */}
        <Simple/>
    
      
    </div>
  )
}

export default App
