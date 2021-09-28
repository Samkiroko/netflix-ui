import React from 'react'
import './navbar.scss'
import neflix from '../../images/netflix_image.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='left'>
          <img src={neflix} alt='neflix logo' />
        </div>
        <div className='right'></div>
      </div>
    </div>
  )
}

export default Navbar
