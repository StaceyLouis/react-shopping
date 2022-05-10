import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useCart } from 'react-use-cart'
import {faTrash, faCircleMinus, faCirclePlus,faLock,faArrowRight, faArrowCircleRight, faArrowAltCircleRight, faArrowRightLong} from '@fortawesome/free-solid-svg-icons'
import './Cart.css'
import { Link } from 'react-router-dom'
import visa from './images/Visa.png'
import mastercard from './images/mastercard.png'
import paypal from './images/paypal.png'


const Cart = ({product}) => {
 const {isEmpty,
  totalItems, totalUniqueItems,
items, updateItemQuantity, removeItem,
cartTotal} = useCart()
console.log(items)
const list = items.map(i =>{
  return(
    <div key={i.id} className="card">
      <img src={i.image} className='cart-thumbnail'/>
      <div><h5>{i.title}</h5>
      </div>
      <div className="btn-container">
        <h5 className='title'>Quantity</h5>
        <div className='btn-group'>
        <button className="cart-btn" onClick={()=> updateItemQuantity(i.id, i.quantity + 1)}><FontAwesomeIcon icon={faCirclePlus}/></button>
        <span><h3>{i.quantity}</h3></span>
      <button className="cart-btn" onClick={()=> updateItemQuantity(i.id, i.quantity - 1)}><FontAwesomeIcon icon={faCircleMinus}/></button>
      </div>
      </div>
      <div>
      <button className="cart-btn" onClick={()=> removeItem(i.id)}><FontAwesomeIcon icon={faTrash}/></button>
      <h4>${i.itemTotal}</h4>
    </div>
    </div>
  )
})
if(isEmpty) return <p>Your Cart is Empty</p>
  return (
    <div className='cart-container'>
      {list}

      <div className='bottom-container'>
        <button className='promo-btn'>Promo Code?</button>
        <div>
          <div className='sb-total'>
          <h3>Subtotal</h3><h3> ${cartTotal}</h3></div>
          <br/>
          <p>Shipping taxes and discounts calculated at checkout</p>
          <br/>
          <button className='checkout-btn'><Link to="/checkout">Checkout</Link> <FontAwesomeIcon icon={faArrowRightLong} id="icon"/></button>

          <br/> <br/>
          <span className='span'><FontAwesomeIcon icon={faLock}/> Secured by Snipcart</span>
          <div className='icons'>
            <img src={visa} title="visa"/>
            <img src={mastercard} title="mastercard"/>
            <img src={paypal} title="paypal"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart