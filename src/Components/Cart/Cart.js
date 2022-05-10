import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useCart } from 'react-use-cart'
import {faTrash, faCircleMinus, faCirclePlus} from '@fortawesome/free-solid-svg-icons'
import './Cart.css'
import { Link } from 'react-router-dom'

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
        <button>Promo Code?</button>
        <div>
          <h3>Subtotal: {cartTotal}</h3>
          <p>Shipping taxes and discounts calculated at checkout</p>
          <button><Link to="/checkout">Checkout</Link></button>
        </div>
      </div>
    </div>
  )
}

export default Cart