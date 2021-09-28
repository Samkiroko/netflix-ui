import React from 'react'
import Navbar from '../components/navbar/Navbar'
import './home.scss'
import img from '../images/banner.jpg'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <img src={img} alt='' />
    </div>
  )
}

export default Home
