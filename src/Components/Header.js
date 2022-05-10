import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { useCart } from 'react-use-cart'

const Div = styled.div`
margin-top: 20px;
padding-bottom: 12px;
border-bottom: 1px solid black;
`
const Links = styled(Link)`
text-decoration: none;
    color: black;
    margin: 15px;
    &:hover {
      text-decoration: underline;
    }
   
`
    

const Header = () => {
  const {totalItems} = useCart()
  return (
    <Div>
        <Links to="/" >Home</Links>
        <Links to="/about" >About</Links>
        <Links to="/cart" ><FontAwesomeIcon icon={faCartShopping} />Cart({totalItems})</Links>
    </Div>
  )
}

export default Header