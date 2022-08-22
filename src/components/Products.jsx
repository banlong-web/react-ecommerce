import React from 'react'
import useProducts from '../data/useProducts'
import HTMLReactParser from 'html-react-parser';
import StarRatings from 'react-star-ratings';

import { Link } from "react-router-dom"

var productsNotNull = [];
const Products = () => {
    const products = useProducts()
    products.map(item => (
        productsNotNull = item
    ))
    if (productsNotNull !== null) {
        return (
            <div className="row">
                {
                    productsNotNull.map(item => (
                        <div className='product-card col-sm-12 col-md-6 col-xl-4' key={item.id}>
                            <div className='product-card-img'>
                                <Link to={`/shop/${item.slug}`}><img src={item.image.sourceUrl !== null ? item.image.sourceUrl : ''} alt="" /></Link>
                            </div>
                            <div className='product-card-content'>
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                            </div>
                            <div className='product-card-bootom'>
                                <div className='price-and-rate'>
                                    <div className='price'>
                                        {HTMLReactParser(item.price)}
                                    </div>
                                    <div className='rate'>
                                        {
                                            <StarRatings 
                                            rating={item.reviews.averageRating}
                                            starRatedColor="yellow"
                                            starDimension = "15px"
                                            name = 'rating'
                                            starSpacing = "5px"
                                            />
                                        }
                                    </div>
                                </div>
                                <div className='add-to-cart'>
                                    <a href="#" className='button'>Add To Cart</a>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default Products