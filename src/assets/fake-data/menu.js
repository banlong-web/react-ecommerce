export const menuPrimary = [
    {
        display: 'Home',
        path: '/',
        slug: 'home'
    },
    {
        display: 'Shop',
        path: '/shop',
        slug: 'shop',
        submenu: [
            {
                display: 'Wishlist',
                path: '/wishlist',
                slug: 'wishlist'
            },
            {
                display: 'Cart',
                path: '/cart',
                slug: 'cart'
            },
            {
                display: 'Checkout',
                path: '/checkout',
                slug: 'checkout'
            },
        ]
    },
    {
        display: 'About',
        path: '/about',
        slug: 'about'
    },
    {
        display: 'Blog',
        path: '/blog',
        slug: 'blog'
    },
    {
        display: 'Contact Us',
        path: '/contact-us',
        slug: 'contact-us'
    },
]

export const menuFooter = [
    {
        display: 'Shipping Information',
        path: '/shipping-information',
        slug: 'shipping-information'
    },
    {
        display: 'Returns & Exchange',
        path: '/returns-exchange',
        slug: 'returns-exchange'
    },
    {
        display: 'Terms & Conditions',
        path: '/terms-conditions',
        slug: 'terms-conditions'
    },
    {
        display: 'Privacy Policy',
        path: '/privacy-policy',
        slug: 'privacy-policy'
    },
    {
        display: 'FAQs',
        path: '/faqs',
        slug: 'faqs'
    },
]