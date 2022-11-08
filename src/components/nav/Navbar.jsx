import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div>
      <h1> RECIPE-APP</h1>
      </div>
      <div  className='navbar2' fixed="top">
      <Link className='link' to="/">Home</Link>
      <Link  className='link' to="about">About</Link>
      <Link  className='link' to="register">Register</Link>
      <Link className='link' to="logout">Logout</Link>
      </div>
    </div>
  )
}

export default Navbar