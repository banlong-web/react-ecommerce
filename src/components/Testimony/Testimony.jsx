import React from 'react'
import testimonies from '../../assets/fake-data/testimonies'
import { Carousel } from 'react-responsive-carousel'

const Testimony = () => {
    return (
        <div className='testimony-wrapper'>
            <div className='container'>
                <div className='heading-testimony'>
                    <span>Testimony</span>
                    <h2>Our satisfied customer says</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
                </div>
                <Carousel showThumbs={false} labels={false} useKeyboardArrows={false} showArrows={false} showStatus={false} autoPlay={false} infiniteLoop={false}>
                    {
                        testimonies.map((item, index) => (
                            <div key={index}>
                                <div className='user-img' style={{'background':`url(${item.img})`}}>
                                    <span className='quote'>
                                    <i className='bx bxs-quote-left' ></i>
                                    </span>
                                </div>
                                <div className='text' style={{'maxWidth': '500px', 'margin':'0 auto', 'padding': '20px 0 60px 0'}}>
                                    <p className='content'>{item.description}</p>
                                    <p className='name'>{item.name}</p>
                                    <span>{item.job}</span>
                                </div>
                            </div>
                        ))
                    }
                </Carousel>
            </div>
        </div>
    )
}

export default Testimony