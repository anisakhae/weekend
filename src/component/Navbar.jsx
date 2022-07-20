import React from 'react'
import './Navbar.css'
import Bitmap from '../img/Bitmap.png'

const Navbar = () => {
  return (
    <div className="container">
      <div className="navbar">
        <img src={Bitmap} alt="" />
      </div>
      <div className="text">
        <h1>Good Morning</h1>
      </div>
    </div>
  )
}

export default Navbar