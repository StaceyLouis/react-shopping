import React from 'react'
import styled from 'styled-components'
const Div = styled.div`
  position: fixed;
  bottom: 0;
  width: 100vw;
`
const links = {
  textDecoration: "none",
  color: 'black',
 
}
const Footer = () => {
  return (
    <Div>
      <span> Built by <a style={links} href="https://github.com/StaceyLouis">Stacey Louis</a></span>
    </Div>
  )
}

export default Footer