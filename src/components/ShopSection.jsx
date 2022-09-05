import React, { useEffect } from 'react'
import ProductsLoadMore from './ProductsLoadmore/ProductsLoadMore'

import { useSelector, useDispatch } from 'react-redux'
import { listProduct } from '../Redux/Actions/ProductActions'

const ShopSection = (props) => {
  const dispatch = useDispatch();
  let visable = 8;
  const productList = useSelector((state) => state.productlist);
  const { loading, error, products } = productList;
  useEffect(() => {
      dispatch(listProduct(visable));
  }, [dispatch, visable])
    return (
      <>
        <div className='search-form'>
          <div className='container'>
            <div className='form-group'>
              <input type="search" autoComplete='true' name='s' id='search' className='search-control' />
              <input type="submit" value="Search" />
            </div>
          </div>
        </div>
        <div className='container'>
          <div className="row">
            <div className="sidebar col-sm-12 col-md-12 col-xl-3">
              <div className='filter'>
                This is filter
              </div>
            </div>
            <div className='col-sm-12 col-md-12 col-xl-9'>
              <div className='title-listproduct'>
                <h3>All Products</h3>
              </div>
              <div className='list-product'>
                  <ProductsLoadMore data={products} error={error} loading={loading} visable={visable} path = {props.path} />
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

export default ShopSection