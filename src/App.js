import './App.css';
import Header from './Components/Header'
import Store from './Components/Store/Store'
import Footer from './Components/Footer'
import Cart from './Components/Cart/Cart'
import {CartProvider} from 'react-use-cart'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <CartProvider>
      <Header/>
      <Store/>
      <Routes>
      <Route path="/"/>
      <Route path='/cart' element={<Cart/>}/>
        </Routes>
    <Footer/>
      </CartProvider>
    </div>
  );
}

export default App;
