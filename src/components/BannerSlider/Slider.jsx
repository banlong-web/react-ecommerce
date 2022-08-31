import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Slider = props => {

    const data = props.data;
    const [activeSlide, setActiveSlide] = useState(0);

    const timeOut = props.timeOut ? props.timeOut : 3000

    const nextSlide = useCallback(
        () => {
            const index = activeSlide + 1 === data.length ? 0 : activeSlide + 1
            setActiveSlide(index)
        },
        [activeSlide, data],
    )

    const prevSlide = () => {
        const index = activeSlide - 1 < 0 ? data.length - 1 : activeSlide - 1
        setActiveSlide(index)
    }

    useEffect(() => {
        if (props.auto) {
            const slideAuto = setInterval(() => {
                nextSlide()
            }, timeOut);
            return () => {
                clearInterval(slideAuto)
            }
        }
    }, [nextSlide, timeOut, props])

    if (data !== undefined) {
        return (
            <div className="slider-layout">
                {
                    data.map((item, index) => (
                        <SliderItem key={index} item={item} active={index === activeSlide} />
                    ))
                }
                 {
                props.control ? (
                    <div className="slider-control">
                        <div className="slider-control-item" onClick={prevSlide}>
                            <i className='bx bx-chevron-left'></i>
                        </div>
                        <div className='slider-control-item'>
                            <div className='index'>
                                {activeSlide + 1} of {data.length}
                            </div>
                        </div>
                        <div className='slider-control-item' onClick={nextSlide}>
                            <i className='bx bx-chevron-right'></i>
                        </div>
                    </div>
                ) : null
            }
            </div>
        )
    }
}

Slider.propTypes = {
    data: PropTypes.array,
    control: PropTypes.bool,
    auto: PropTypes.bool,
    timeOut: PropTypes.number
}

const SliderItem = props => (
    <div className={`slider-item ${props.active ? 'active' : ''}`} style={
        {
            'backgroundImage': `url(${props.item.img})`
        }
    }>
        <div className='overlay'></div>
        <div className='container'>
            <div className='content-slider'>
                <div className='row slider-text'>
                    <div className='col-sm-12 '>
                        <h1 className='title-slider'>{props.item.title}</h1>
                        <h2 className='subtitle-slider'>{props.item.subtitle}</h2>
                        <div className='view-detail'>
                            <Link to={props.item.path}>View Detail <i className='bx bx-chevron-right'></i> </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Slider