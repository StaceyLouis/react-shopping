import './App.css';
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Header from './Components/Header'
import Store from './Components/Store/Store'
import Cart from './Components/Cart/Cart'
import {CartProvider} from 'react-use-cart'
import {Routes, Route} from 'react-router-dom'
import Checkout from './Components/Checkout';
import About from './Components/About';

function App() {
  const [product, setProduct] = useState([])
  useEffect(()=>{
    axios
    .get('https://fakestoreapi.com/products')
    .then(res=> setProduct(res.data))
    .catch(err=> console.log(err))
  },[])
  
  return (
    <div className="App">
      <CartProvider>
      <Header/>
      <Routes>
        <Route path='/products' element={<Store product={product}/>}/>
      <Route path="/about" element={<About />}/>
      <Route path='/cart' element={<Cart product={product}/>}/>
      <Route path="/checkout" element={<Checkout/>} />
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
