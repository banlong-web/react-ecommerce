// import { data } from 'autoprefixer'
import React from 'react'
import useProducts from './data/useProducts'

export default function App() {
  const products = useProducts()

  if (products !== null) {
    const product = products[0];
    
    return(
      product.map(item => (
        <li key={item.id}>{item.name}</li>
      ))
    )
  }
}