import React from 'react'
import { Routes,Route } from 'react-router'
import styled from 'styled-components'

const Title = styled.div`
display: flex;
justify-content: center;
align-content: center;
align-items: center;
height: 100vh;
`
const Checkout = () => {
  return (
  <Title>
 <h2>Thank you for shopping with us</h2>
  </Title>
  )
}

export default Checkout