import React from 'react'
import styled from 'styled-components'
import './Store.css'
import { useCart } from 'react-use-cart'

const container = {
  display:"flex",
  flexDirection: "row",
  flexWrap: "wrap",
  width: '80vw',
  margin: "auto"
}
const Img = styled.img`
width: 150px;
height: 200px;
margin: 10px;
`
const Store =({product}) => {
const {addItem} = useCart()
const list = product.map((i)=>{
  return(
    <div key={i.id} className="card-container">
        <Img src={i.image} alt={i.title} />
        <h5>{i.title}</h5>
        <h5>${i.price}</h5>
        <button className='btn' onClick={()=> addItem(i)}>Add to Cart</button>
      </div>
  )
})
  return (
    <div style={container}>
      {list}
    </div>
  )
}

export default Store