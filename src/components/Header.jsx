import React, { useState, useEffect, useRef } from 'react'
// import usePages from '../data/usePages';

import { Link, useLocation } from "react-router-dom"
import img from "../assets/image/images.png"
// var pageNotNull = [];
const navMain = [
    {
        display: 'Shop',
        path: '/shop'
    },
    {
        display: 'About Us',
        path: '/about-us'
    },
    {
        display: 'Contact Us',
        path: '/contact-us'
    },
]
const Header = () => {
    // const pages = usePages();

    // if (pages !== null) {
    //     pages.map( item => (
    //       pageNotNull = item
    //     ))
    //     return (
    //         <ul>
    //             {
    //                 pageNotNull.sort((a,b)=>a.pageId > b.pageId ? 1 : -1).map(item => (
    //                     <li key={item.pageId}><Link to={item.uri}>{item.title}</Link></li>
    //                 ))
    //             }
    //         </ul>
    //     )
    // }

    //Show form search
    const [show, setShow] = useState(false);

    const showForm = e => {
        setShow(current => !current);
    }

    //Shrink header
    const headerRef = useRef(null);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('shirnk');
            } else {
                headerRef.current.classList.remove('shirnk');
            }
        })
    }, []);

    //Active menu
    const { pathname } = useLocation();
    const isActive = navMain.findIndex(e => e.path === pathname);
    const menuActive = useRef(null);
    const menuToggle = () => {
        menuActive.current.classList.toggle('active');
    }
    return (
        <header>
            <div className='header-layout' ref={headerRef}>
                <div className="container">
                    <div className='header-content'>
                        <div className='menu-bar'>
                            <i className='bx bx-menu'></i>
                        </div>
                        <div className="header-content-logo">
                            <Link to={'/'}><img src={img} alt="Dragon Store" /></Link>
                        </div>
                        <div className='header-content-menu' ref={menuActive}>
                            <nav className="nav-bar">
                                <ul>
                                    {
                                        navMain.map((item, index) => (
                                            <li key={index} onClick={menuToggle} className={`menu-header-item ${index === isActive ? 'active' : ''}`}>
                                                <Link to={item.path}>{item.display}</Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </nav>
                            <div className='menu-close'>
                                <i className='bx bx-x'></i>
                            </div>
                        </div>
                        <div className="header-items">
                            <div className='search'>
                                <form className={`${show ? 'active' : 'hidden'}`} autoComplete="true">
                                    <input type="search" name='s' placeholder='Search...'/>
                                    {/* <input type="submit" value="Search" /> */}
                                </form>
                                <button type="button" onClick={showForm} className={`close-search ${show ? 'active' : 'hidden'}`}> <i className='bx bx-x'></i> </button>
                                <button type="button" onClick={showForm} className={`search-button ${show ? 'hidden' : 'active'}`}> <i className='bx bx-search'></i> </button>
                            </div>
                            <div className='cart-item'>
                                <Link to="/cart" className='cart-icon'>
                                    <i className='bx bx-cart'></i>
                                    <span className='number-cart'>0</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header