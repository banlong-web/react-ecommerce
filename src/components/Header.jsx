import React from 'react'
import MenusPrimary from './MenusPrimary'

import Slider from './BannerSlider/Slider'

const Header = () => {
    //Show form search
    // const [show, setShow] = useState(false);

    // const showForm = e => {
    //     setShow(current => !current);
    // }

    // //Shrink header
    // const headerRef = useRef(null);

    // useEffect(() => {
    //     window.addEventListener('scroll', () => {
    //         if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    //             headerRef.current.classList.add('shirnk');
    //         } else {
    //             headerRef.current.classList.remove('shirnk');
    //         }
    //     })
    // }, []);

    // //Active menu
    // const { pathname } = useLocation();
    // const isActive = navMain.findIndex(e => e.path === pathname);
    // const menuActive = useRef(null);
    // const menuToggle = () => {
    //     menuActive.current.classList.toggle('active');
    // }
    return (
        <header>
            <div className='header-layout'>
                <div className="py-1 bg-primary">
                    <div className="container">
                        <div className="row no-gutters d-flex align-items-start align-items-center px-md-0">
                            <div className="col-lg-12 d-block">
                                <div className="row d-flex">
                                    <div className="col-md pr-4 d-flex topper align-items-center">
                                        <div className="icon mr-2 d-flex justify-content-center align-items-center">
                                            <span className="bx bx-phone"></span>
                                        </div>
                                        <span className="text">+ 1235 2355 98</span>
                                    </div>
                                    <div className="col-md pr-4 d-flex topper align-items-center">
                                        <div className="icon mr-2 d-flex justify-content-center align-items-center">
                                            <span className="bx bx-paper-plane"></span>
                                        </div>
                                        <span className="text">youremail@email.com</span>
                                    </div>
                                    <div className="col-md-5 pr-4 d-flex topper align-items-center text-lg-right">
                                        <span className="text">3-5 Business days delivery &amp; Free Returns</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <MenusPrimary />
                <Slider/>
            </div>
        </header>
    )
}

export default Header