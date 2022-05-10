import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'

const Div = styled.div`
margin-top: 20px;
padding-bottom: 12px;
border-bottom: 1px solid black;
`
const links = {
    textDecoration: "none",
    color: 'black',
    margin: "15px"
}
const Header = () => {
  return (
    <Div>
        <Link to="/" style={links}>Home</Link>
        <Link to="/about" style={links}>About</Link>
        <Link to="/cart" style={links}><FontAwesomeIcon icon={faCartShopping} />Cart</Link>
    </Div>
  )
}

export default Header