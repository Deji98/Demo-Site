import React from 'react'
import { Link } from 'react-router-dom'

function Schedule({user}) {
  return (
    <div className='scheduled'>
        <h2>Hello, {user.name}</h2>
      <h4>Follow these steps to schedule a demo</h4>
      <h3>Or</h3>
      <Link to="/" className="btn">Log out</Link>
    </div>
  )
}

export default Schedule