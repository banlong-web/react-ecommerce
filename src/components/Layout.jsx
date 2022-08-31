import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './Header'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Footer from './Footer'
import ProductDetail from './ProductDetail'
import Cart from '../pages/Cart'
import About from '../pages/About'
import ContactUs from "../pages/ContactUs"
import PageNotFound from '../pages/PageNotFound'
import CartComponent from './CartComponent'
import Blog from '../pages/Blog'

const Layout = () => {
    return (
        <BrowserRouter>
            <Header/>
            <div className='page-content-wrapper' style={{minHeight: '100vh'}}>
                <Routes>
                    <Route path='/' exact element={<Home/>}>
                        <Route path='home' exact element={<Home/>}/>
                    </Route>
                    <Route path='shop' element={<Shop/>}/>
                    <Route path='shop/category' element ={<p>HHHH</p>}/>
                    <Route path='shop/:slug' element ={<ProductDetail/>}/>
                    <Route path='cart' element={<Cart/>}/>
                    <Route path='cart/:slug?qty=' element = {<CartComponent/>}/>
                    <Route path='about' element={<About/>}/>
                    <Route path='blog' element={<Blog/>}/>
                    <Route path='contact-us' element={<ContactUs/>}/>
                    <Route path='*' element={<PageNotFound/>}/>
                </Routes>
            </div>
            <Footer/>
        </BrowserRouter>
    )
}

export default Layout