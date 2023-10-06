/* eslint-disable no-unused-vars */
import React from 'react'
import { Link, NavLink} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="container mx-auto bg-slate-600 py-2 flex flex-row justify-between items-center">
      <div className='flex items-center space-x-3'>
      <div className='w-9 h-9 rounded-full bg-blue-600'></div>
      <Link to='/'>Logo</Link>
      </div>
      <div className='flex space-x-4 pr-4'>
        <NavLink className='nav-link duration-300' to="/">Home </NavLink>
        <NavLink className='nav-link duration-300' to="/login">Login </NavLink>
        <NavLink className='nav-link duration-300' to="/register">Register </NavLink>
        <NavLink className='nav-link duration-300' to="/dashboard">Dashboard </NavLink>
      </div>
    </nav>
  )
}
