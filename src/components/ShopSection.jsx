import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { listProduct } from '../Redux/Actions/ProductActions';

import HTMLReactParser from 'html-react-parser';
import StarRatings from 'react-star-ratings';

import { Link } from "react-router-dom"
import Loading from '../data/Loading';

const ShopSection = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productlist)
  const { loading, error, products } = productList
  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch])
  if (products !== null) {
    return (
      <div className='row'>
        {
          loading ? (<Loading />) : error ? (<p>Error: {error}</p>) :
            (
              <>
                {
                  products.sort((a, b) => a.databaseId > b.databaseId ? 1 : -1).map((product) => (
                    <div className="product-card col-sm-12 col-md-6 col-xl-4" data-cart-product key={product.id}>
                      <div className='product-card-img'>
                        <Link to={`/shop/${product.slug}`}>
                          <img src={product.image.sourceUrl !== null ? product.image.sourceUrl : ''} alt="" />
                        </Link>
                      </div>
                      <div className='product-card-content'>
                        <h3>
                          <Link to={`/shop/${product.slug}`}>{product.name}</Link>
                        </h3>
                        <p>{product.description}</p>
                      </div>
                      <div className='product-card-bootom'>
                        <div className='price-and-rate'>
                          <div className='price'>
                            {HTMLReactParser(String(product.price))}
                          </div>
                          <div className='rate'>
                            {
                              <StarRatings
                                rating={product.reviews.averageRating}
                                starRatedColor="yellow"
                                starDimension="15px"
                                name='rating'
                                starSpacing="5px"
                              />
                            }
                          </div>
                        </div>
                        <div className='add-to-cart'>
                          {/* {!i.cartCount ? ( */}
                          {/* <button onClick={e => this.addToCart(e, i.itemname)}>
                                <Link to='/cart'>Add To Cart</Link>
                            </button> */}
                          <button>
                            <Link to='/cart'>Add To Cart</Link>
                          </button>
                          {/* ) : (
                            <div className="number">
                            <button onClick={e => this.subtract(e, i.itemname)}>-</button>
                            <button>{i.cartCount}</button>
                            <button onClick={e => this.add(e, i.itemname)}>+</button>
                            </div>
                        )} */}
                        </div>
                      </div>
                    </div>
                  ))
                }
              </>
            )
        }
      </div>
    )
  }
}

export default ShopSection