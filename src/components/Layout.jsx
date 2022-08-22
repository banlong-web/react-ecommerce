import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './Header'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Footer from './Footer'
import ProductDetail from './ProductDetail'

const Layout = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' exact element={<Home/>}>
                    <Route path='home' exact element={<Home/>}/>
                </Route>
                <Route path='shop' element={<Shop/>}/>
                <Route path='shop/:slug' element ={<ProductDetail/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default Layout