import React from 'react'
import { useLocation } from 'react-router-dom'
import ShopSection from '../components/ShopSection'

const Shop = () => {
    const path = useLocation();
    return (
        <div className='shop-page'>
            <ShopSection path = {path.pathname}/>
        </div>
    )
}

export default Shop