import React, { useEffect } from 'react'
import sliderBanner from '../assets/fake-data/slider'
import Slider from '../components/BannerSlider/Slider'
import { ContactBanner } from '../components/ContactBanner/ContactBanner'
import CategoryBanner from '../components/CatetoryBanner/CategoryBanner'
import ProductsLoadMore from '../components/ProductsLoadmore/ProductsLoadMore'

import { useSelector, useDispatch } from 'react-redux'
import { listProduct } from '../Redux/Actions/ProductActions'
import SubcribeForm from '../components/SubcribeForm/SubcribeForm'
import BrandSlider from '../components/BannerSlider/BrandSlider'
import Testimony from '../components/Testimony/Testimony'
// import BannerSale from '../components/BannerSlider/BannerSale'
// import useHome from '../data/useHome'
// import HTMLReactParser from 'html-react-parser';

// var itemLength = '';
const Home = () => {
    // const home = useHome();
    // home.map(item => (
    //     itemLength = item.length
    // ))
    // if (itemLength !== 0) {
    //     return (
    //         <div className='container'>
    //             {
    //                 home.map(item => (
    //                 <div key={item}>
    //                     <h1>{item.title}</h1>
    //                     {HTMLReactParser(item.content)}
    //                 </div>
    //             ))
    //             }
    //         </div>
    //     )
    // }
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productlist);
    const {loading, error, products} = productList;
    useEffect( () => {
        dispatch(listProduct())
    }, [dispatch])
    return (
        <>
            <Slider data={sliderBanner} control={false} auto={true} timeOut={6000}/>
            <ContactBanner/>
            <CategoryBanner/>
            <ProductsLoadMore data={products} error={error} loading={loading} visable={8}/>
            {/* <BannerSale/> */}
            <Testimony/>
            <BrandSlider/>
            <SubcribeForm/>
        </>
    )
}

export default Home