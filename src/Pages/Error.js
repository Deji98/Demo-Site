import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className='error'>
       <h2>404</h2>
      <p>page not found</p>
      <Link className='btn' to='/'>back home</Link>
    </div>
  )
}

export default Error