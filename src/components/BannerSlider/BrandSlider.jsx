import React from 'react'
import brandSlider from '../../assets/fake-data/brands'

const BrandSlider = () => {
    const data = brandSlider;
    return (
        <div className='brand-slider'>
            <div className='container'>
                <div className='row'>
                    {
                        data.map((item, index) => (
                            <div className='col-sm' key={index}>
                                <img src={item.img} alt="" className='img-fluid' />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default BrandSlider