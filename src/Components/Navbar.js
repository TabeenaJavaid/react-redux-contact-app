import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav  className='navbar navbar-expand-lg navbar-dark bg-dark'>
       <Link to='/' className='navbar-brand ms-5'>Tabeena's Contact App</Link>
    </nav>

  )
}

export default Navbar