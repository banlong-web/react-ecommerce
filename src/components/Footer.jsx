import React from 'react';
import MenusFooter from './MenusFooter';

const Footer = () => {
  let newDate = new Date();
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  let year = newDate.getFullYear();
  return (
    <div className='footer-layout'>
      <div className='container'>
        <div className='footer-top'>
          <div className='row'>
            <div className='go-top' onClick={goToTop}>
              <span className='bx bx-chevron-up'></span>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-6 col-md-3'>
              <div className='content-footer'>
                <h2>VegetFoods</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                <ul className='social-icons'>
                  <li><a href="https://facebook.com/vegetfoodsgold" target="_blank" rel="noopener noreferrer"><span className='bx bxl-facebook'></span></a></li>
                  <li><a href="https://twitter.com/vegetfoodsgold" target="_blank" rel="noopener noreferrer"><span className='bx bxl-twitter'></span></a></li>
                  <li><a href="https://instagram.com/vegetfoodsgold" target="_blank" rel="noopener noreferrer"><span className='bx bxl-instagram'></span></a></li>
                </ul>
              </div>
            </div>
            <MenusFooter/>
            <div className='col-sm-6 col-md-3'>
              <div className='content-footer'>
                <h2>Have a Questions?</h2>
                <div className='contact-info'>
                  <div className='flex address'>
                    <a href="https://www.google.com/maps/" target="_blank" rel="noopener noreferrer">
                      <span className='icon bx bxs-map'></span>
                      <span className='text'>203 Fake St. Mountain View, San Francisco, California, USA</span>
                    </a>
                  </div>
                  <div className='flex phone'>
                    <a href="tel:+0123456789" target="_blank" rel="noopener noreferrer">
                      <span className='icon bx bx-phone'></span>
                      <span className='text'>+0123456789</span>
                    </a>
                  </div>
                  <div className='flex emal'>
                    <a href="mailto:infomail@gmail.com" target="_blank" rel="noopener noreferrer">
                      <span className='icon bx bx-envelope'></span>
                      <span className='text'>infomail@gmail.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='copy-right' style={{textAlign: 'center'}}>
          <span>Copyright © Newbie Developer ReactJS with Wordpress {year}</span>
        </div>
      </div>
    </div>
  )
}

export default Footer