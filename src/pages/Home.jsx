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

const Home = () => {
    const dispatch = useDispatch();
    let visable = 8;
    const productList = useSelector((state) => state.productlist);
    const { loading, error, products } = productList;
    useEffect(() => {
        dispatch(listProduct(visable));
    }, [dispatch, visable])
    return (
        <>
            <Slider data={sliderBanner} control={false} auto={true} timeOut={6000} />
            <ContactBanner />
            <CategoryBanner />
            <div className='featured-product'>
                <div className='container'>
                    <div className='heading-section'>
                        <span className='subheading'>Featured Products</span>
                        <h2>Our Products</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                    </div>
                    <div className='featured-product-content'>
                        <ProductsLoadMore data={products} error={error} loading={loading} visable={visable} />
                    </div>
                </div>
            </div>
            <Testimony />
            <BrandSlider />
            <SubcribeForm />
        </>
    )
}

export default Home