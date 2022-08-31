import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import HTMLReactParser from 'html-react-parser';
import StarRatings from 'react-star-ratings';

import { listProduct, detailProduct } from '../Redux/Actions/ProductActions';
import { useDispatch, useSelector } from 'react-redux';

import Loading from '../data/Loading';
import Error from '../data/Error';

/* Use API others
const ProductDetail = ({match}) => {
  const productSlug = match.params.slug;
  const productDetail = useSelector((state) => state.productDetail)
  const { loading, error, product } = productDetail
  useEffect(() => {
    dispatch(detailProduct());
  }, [dispatch, productSlug])
}*/
const ProductDetail = () => {
  // const [qty, setQty] = useState(1);
  // const history = useNavigate();
  const { slug } = useParams();
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productlist);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch])
  const thisProduct = products.find((products) => String(products.slug) === slug) || {};

  // Add to cart
  const AddToCartHandle = (e) => {
    e.preventDefault();
    // history(`cart/${thisProduct.slug}?qty=${qty}`);
  }

  let url = '';
  if (thisProduct.image !== undefined) {
    url = thisProduct.image.sourceUrl;
  }
  if (thisProduct !== null) {
    return (
      <div className='page-detail'>
        {
          loading ? (<Loading />) : error ? (<Error variant='alert-danger'>{error}</Error>) :
            (
              <div className='container'>
                <div className='img'>
                  <img src={url} alt="" />
                </div>
                <div className='content'>
                  <h2 className='title'>{thisProduct.name}</h2>
                  <p className='description'>{thisProduct.description}</p>
                  <div className='content-after'>
                    <div className='price'>
                      <span> Price: </span>
                      <span>{HTMLReactParser(String(thisProduct.price))}</span>
                    </div>
                    <div className='rating'>
                     <span>Reviews:</span>
                     <span>{
                        <StarRatings
                          rating={thisProduct.averageRating}
                          starRatedColor="yellow"
                          starDimension="15px"
                          name='rating'
                          starSpacing="5px"
                        />
                      }</span> 
                    </div>
                    <div className='stock-status'>
                      <span>Status:</span>
                      <span>
                        {
                          thisProduct.stockQuantity <= 0 ? ' Unavaliable ' : ' In Stock '
                        }
                      </span> 
                    </div>
                    <div className='quantity'>
                      {
                        thisProduct.stockQuantity > 0 ? (
                          <>
                          <span>Quantity:</span>
                          <select>
                            {
                              [...Array(thisProduct.stockQuantity).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>{x + 1}</option>
                                )
                              )
                            }
                          </select>
                          <button className='add-to-cart' onClick={AddToCartHandle}>
                            Add To Cart
                          </button>
                          </>
                        ) : null
                      }
                    </div>
                  </div>
                </div>
              </div>
            )
        }
      </div>
    )
  }
}

export default ProductDetail