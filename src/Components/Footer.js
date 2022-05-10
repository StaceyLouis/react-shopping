import React from 'react'
import styled from 'styled-components'
const Div = styled.div`
  bottom: 0;
  width: 100vw;
  
`
const Links = styled.a`
  text-decoration: none;
  color: black;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
 
`
const Footer = () => {
  return (
    <Div>
      <span> Built by <Links  href="https://github.com/StaceyLouis">Stacey Louis</Links></span>
    </Div>
  )
}

export default Footer