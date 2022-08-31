import React from 'react'

const SubcribeForm = () => {
  return (
    <div className='subcribe'>
        <div className='container'>
            <div className='row align-center'>
                <div className='col-md-6'>
                    <h2 className='title'>Subcribe to our Newsletter</h2>
                    <span>Get e-mail updates about our latest shops and special offers</span>
                </div>
                <div className='col-md-6'>
                    <form action="" className='subscribe-form'>
                        <div className='form-group'>
                            <input type="text" placeholder='Enter email address' className='form-control' />
                            <input type="submit" value="Subscribe" className='submit-form' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SubcribeForm