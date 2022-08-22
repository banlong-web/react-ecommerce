import React from 'react'
import usePages from '../data/usePages';

import { Link } from "react-router-dom"
var pageNotNull = [];
const Header = () => {
    const pages = usePages();

    if (pages !== null) {
        pages.map( item => (
          pageNotNull = item
        ))
        return (
            <ul>
                {
                    pageNotNull.sort((a,b)=>a.pageId > b.pageId ? 1 : -1).map(item => (
                        <li key={item.pageId}><Link to={item.uri}>{item.title}</Link></li>
                    ))
                }
            </ul>
        )
    }
}

export default Header