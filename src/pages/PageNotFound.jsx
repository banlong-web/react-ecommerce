import React from 'react'
import { Link } from 'react-router-dom'
const PageNotFound = () => {
  return (
    <div className='container'>
      <div className='layout' style={{textAlign: 'center'}}>
        <div className='title-not-found'><h1><strong>PAGE NOT FOUND</strong></h1></div>
        <div className='go-back'>
          <p>Let's go back to the <Link to={'/'}>Homepage</Link>. Special thanks!</p>
        </div>
      </div>
    </div>
  )
}

export default PageNotFound