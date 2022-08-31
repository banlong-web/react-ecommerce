import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import DropDown from './MenuDropdown/DropDown'
import { menuPrimary } from '../assets/fake-data/menu'

// export const menuPrimary = [
//     {
//         display: 'Home',
//         path: '/',
//         slug: 'home'
//     },
//     {
//         display: 'Shop',
//         path: '/shop',
//         slug: 'shop',
//         submenu: [
//             {
//                 display: 'Wishlist',
//                 path: '/wishlist',
//                 slug: 'wishlist'
//             },
//             {
//                 display: 'Cart',
//                 path: '/cart',
//                 slug: 'cart'
//             },
//             {
//                 display: 'Checkout',
//                 path: '/checkout',
//                 slug: 'checkout'
//             },
//         ]
//     },
//     {
//         display: 'About',
//         path: '/about',
//         slug: 'about'
//     },
//     {
//         display: 'Blog',
//         path: '/blog',
//         slug: 'slug'
//     },
//     {
//         display: 'Contact Us',
//         path: '/contact-us',
//         slug: 'contact-us'
//     },
// ]

const MenusPrimary = () => {
    // set dropdown menu
    const [dropdown, setDropdown] = useState(false);
    const activeMobile = useRef(null);
    const showMenuMobile = () => {
        activeMobile.current.classList.toggle('show');
    }

    //shrink header
    const headerRef = useRef(null);
    useEffect(() => {
        window.addEventListener('scroll', ()=> {
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('scrolled','awake')
            } else {
                headerRef.current.classList.remove('scrolled','awake')
            }
        })
    }, [])
    return (
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar" ref={headerRef}>
            <div className="container">
                <Link to={'/'} className="navbar-brand">Vegefoods</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                    aria-controls="ftco-nav" aria-label="Toggle navigation" onClick={showMenuMobile}>
                    <span className='bx bx-menu'></span> Menu
                </button>

                <div className={`collapse navbar-collapse ${activeMobile ? '' : 'show'}`} ref={activeMobile} id="ftco-nav">
                    <ul className="navbar-nav ml-auto">
                        {
                            menuPrimary.map((item, index) => (
                                item.submenu ? (
                                    <li className='nav-item dropdown' key={index} onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
                                        <Link to={item.path} className='nav-link' id="dropdown04" data-toggle="dropdown"
							            aria-haspopup="true" aria-expanded={dropdown ? 'true' : 'false'}>
                                            {item.display}
                                        </Link>
                                        <DropDown submenu={item.submenu} dropdown={dropdown} />
                                    </li>
                                ) : (
                                    <li className='nav-item' key={index}><Link to={item.path} className='nav-link'>{item.display}</Link></li>
                                )
                            ))
                        }
                        <li className="nav-item cta cta-colored">
                            <Link to="/cart" className='nav-link'>
                                <i className='bx bx-cart'></i>
                                <span className='number-cart'>0</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )

}

export default MenusPrimary