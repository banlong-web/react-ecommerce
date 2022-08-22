import React from 'react'
import { useParams } from 'react-router-dom'
import useProducts from '../data/useProducts'
import HTMLReactParser from 'html-react-parser';
import StarRatings from 'react-star-ratings';

const ProductDetail = () => {
  const { slug } = useParams();
  const products = useProducts();
  var product = [];
  products.map((item) => (
    product = item
  ))
  const thisProduct = product.find((product) => String(product.slug) === slug) || {};
  let url = '';
  if (thisProduct.image !== undefined) {
    url = thisProduct.image.sourceUrl;
  }
  if (thisProduct !== null ) {
    return (
      <div className='container'>
        <div className='page-detail'>
          <div className='img'>
            <img src={url} alt="" />
          </div>
          <div className='content'>
            <h2 className='title'>{thisProduct.name}</h2>
            <p className='description'>{thisProduct.description}</p>
          </div>
          <div className='content-after'>
            <span className='price'>{HTMLReactParser(String(thisProduct.price))}</span>
            <span className='rating'>
              {
                <StarRatings 
                rating={thisProduct.averageRating}
                starRatedColor="yellow"
                starDimension = "15px"
                name = 'rating'
                starSpacing = "5px"
                />
              }
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductDetail