import React from 'react'
import './navbar.scss'
import neflix from '../../images/netflix_image.png'
import { Search } from '@material-ui/icons'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='left'>
          <img src={neflix} alt='neflix logo' />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className='right'>
          <Search />
        </div>
      </div>
    </div>
  )
}

export default Navbar
