import React from 'react'
import ShopSection from '../components/ShopSection'

const Shop = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="sidebar col-sm-12 col-md-12 col-xl-3">
                    <div className='sidebar-title'>
                        <h3>Search & Filter</h3>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="search">Search</label>
                        <form action="" id='search'>
                            <input type="search" name='s' placeholder='Search.....' />
                        </form>
                    </div>
                    <div className='filter'>
                        This is filter
                    </div>
                </div>
                <div className='col-sm-12 col-md-12 col-xl-9'>
                    <div className='title-listproduct'>
                        <h3>Product List</h3>
                    </div>
                    <div className='list-product'>
                        {
                            <ShopSection />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop