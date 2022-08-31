import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import HTMLReactParser from 'html-react-parser';
import Loading from '../../data/Loading';
import Error from '../../data/Error';
import StarRatings from 'react-star-ratings';

const ProductsLoadMore = props => {
  const data = props.data;
  const [load, setLoadMore] = useState(props)
  const loadMore = () => {
    setLoadMore((prevState) => {
      return { visable: parseInt(prevState.visable + 4) }
    })
  }
  if (data.length > 0) {
    return (
      props.loading ? (<Loading />) : props.error ? (<Error variant='alert-danger'>{props.error}</Error>) :
        (
          <>
            <div className='featured-product'>
              <div className='container'>
                <div className='heading-section'>
                  <span className='subheading'>Featured Products</span>
                  <h2>Our Products</h2>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                </div>
                <div className='featured-product-content'>
                  <div className='row'>
                    {
                      data.slice(0, load.visable).map((item, index) => (
                        <div className='col-md-6 col-lg-3' key={index}>
                          <div className='product'>
                              <div className='img-prod'>
                              <Link to={`shop/${item.slug}`}> <img src={item.image.sourceUrl} alt="" /> </Link>
                                {
                                  item.onSale === true ? (
                                    <span className='status'>{100-((parseInt(item.salePrice)/parseInt(item.regularPrice))*100)}%</span>
                                  ): null
                                }
                                <div className='bottom-img'>
                                  <button className='button-add-to-cart'><span className='bx bx-cart'></span></button>
                                  <button className='button-add-wishlist'><span className='bx bxs-heart'></span></button>
                                </div>
                              </div>
                              <div className='content-prod'>
                                <div className='title-prod'>
                                  <h5><Link to={`shop/${item.slug}`}>{item.name}</Link></h5>
                                  {
                                    item.shortDescription ? (
                                      HTMLReactParser(item.shortDescription)
                                    ) : null
                                  }
                                </div>
                                <div className='rating'>
                                {
                                  <StarRatings
                                    rating={item.reviews.averageRating}
                                    starRatedColor="yellow"
                                    starDimension="15px"
                                    name='rating'
                                    starSpacing="5px"
                                  />
                                } 
                                </div>
                                <div className='prod-after'>
                                  {
                                    item.reviewCount > 0 ? (
                                      <span className='review'>
                                        {item.reviewCount} Reviews
                                      </span>
                                    ) : (
                                      <span className='review'>
                                        0 Reviews
                                      </span>
                                    )
                                  }
                                  {
                                    item.onSale === true ? (
                                      <>
                                        <span className='sale'>
                                          <del>{HTMLReactParser(item.regularPrice)}</del>
                                          <ins>{HTMLReactParser(item.salePrice)}</ins>
                                        </span>
                                      </>
                                    ) : (
                                      <span className='price'>
                                        {HTMLReactParser((item.regularPrice))}
                                      </span>
                                    )
                                  }
                                </div>
                              </div>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                  {
                    load.visable < props.data.length ? (
                      <div className='button-layout'>
                        <button onClick={loadMore} type='button' className='button-load-more'>Load More</button>
                      </div>
                    ) : null
                  }
                </div>
              </div>
            </div>
          </>
        )
    )
  }
}

ProductsLoadMore.propTypes = {
  data: PropTypes.array.isRequired,
  visable: PropTypes.number.isRequired,
  error: PropTypes.bool,
  loading: PropTypes.bool
}

export default ProductsLoadMore