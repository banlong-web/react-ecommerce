import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import HTMLReactParser from 'html-react-parser';
import Loading from '../../data/Loading';
import Error from '../../data/Error';
import StarRatings from 'react-star-ratings';
import { listProduct } from '../../Redux/Actions/ProductActions';
import { useDispatch } from 'react-redux'

const ProductsLoadMore = props => {
  const data = props.data;
  const [load, setLoadMore] = useState(props.visable)
  const loadMore = () => {
    setLoadMore(() => {
      const loadPage = load + 4;
      return loadPage;
    })
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProduct(load));
  }, [dispatch, load])
  if (data.length > 0) {
    return (
      props.loading ? (<Loading />) : props.error ? (<Error variant='alert-danger'>{props.error}</Error>) :
        (
          <>
            <div className='row'>
              {
                data.map((item, index) => (
                  <div className='col-md-6 col-lg-3' key={index}>
                    <div className='product'>
                      <div className='img-prod'>
                        <Link to={`${props.path === '/shop'? item.slug : `shop/${item.slug}`}`}> <img src={item.image.sourceUrl} alt="" /> </Link>
                        {
                          item.onSale === true ? (
                            <span className='status'>{100 - ((parseInt(item.salePrice) / parseInt(item.regularPrice)) * 100)}%</span>
                          ) : null
                        }
                        <div className='bottom-img'>
                          <button className='button-add-to-cart'><span className='bx bx-cart'></span></button>
                          <button className='button-add-wishlist'><span className='bx bxs-heart'></span></button>
                        </div>
                      </div>
                      <div className='content-prod'>
                        <div className='title-prod'>
                          <h5><Link to={`${props.path === '/shop'? item.slug : `shop/${item.slug}`}`}>{item.name}</Link></h5>
                          {
                            item.shortDescription ? (
                              <p>{HTMLReactParser(item.shortDescription)}</p>
                            ) : null
                          }
                          {
                            props.path === '/shop' ?(<p>{HTMLReactParser(item.description)}</p>) : null
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
            <div className={`button-layout ${load > props.data.length ? 'hidden' : null}`}>
              <button onClick={loadMore} type='button' className='button-load-more'>
                Load More
              </button>
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
  loading: PropTypes.bool,
}

export default ProductsLoadMore