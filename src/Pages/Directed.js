import React from 'react'
import { Link } from 'react-router-dom'

function Directed() {
  return (
    <div className='direct'><h2>You have to login first</h2>
    <Link className='btn' to="/Login">Login</Link>
    </div>
  )
}

export default Directed;

