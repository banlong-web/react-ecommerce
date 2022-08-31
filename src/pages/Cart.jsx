import React from 'react'
import { useParams } from 'react-router-dom'

const Cart = () => {
    const {slug} = useParams()
    console.log(slug);
  return (
    <div>Cart</div>
  )
}

export default Cart