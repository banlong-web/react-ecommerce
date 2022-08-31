import React from 'react'
// import { menuPrimary } from '../MenusPrimary'
import { Link } from 'react-router-dom'

const DropDown = ({submenu, dropdown}) => {
    return (
        <div className={`dropdown-menu ${dropdown ? 'show' : ''}`} id="dropdown04">
            {
                submenu.map(item => (
                    <Link key={item.slug} to={item.path} className="dropdown-item">{item.display}</Link>
                ))
            }
        </div>
    )
}

export default DropDown