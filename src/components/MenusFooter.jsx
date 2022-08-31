import React from 'react'
import { Link } from 'react-router-dom'
import { menuPrimary, menuFooter } from '../assets/fake-data/menu'

const MenusFooter = () => {
  return (
    <>
      <div className='col-sm-6 col-md-3'>
        <div className='content-footer menu-footer'>
          <h2>Menu</h2>
          <ul>
            {
              menuPrimary.map(item => (
                item.slug !== 'home' ? (
                <li key={item.slug}><Link to={item.path}>{item.display}</Link></li>
                ) : null
              ))
            }
          </ul>
        </div>
      </div>
      <div className='col-sm-6 col-md-3'>
        <div className='content-footer menu-help'>
          <h2>Help</h2>
          <ul>
            {
              menuFooter.map(item => (
                <li key={item.slug}><Link to={item.path}>{item.display}</Link></li>
              ))
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default MenusFooter