import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div>
      <h1> RECIPE-APP</h1>
      </div>
      <div className='link' fixed="top">
      <Link to="/">Home</Link>
      <Link to="about">About</Link>
      <Link to="register">Register</Link>
      <Link to="logout">Logout</Link>
      </div>
    </div>
  )
}

export default Navbar