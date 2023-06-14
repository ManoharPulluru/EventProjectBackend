import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <center>
          <Link to='/vendorsignin'>
          <button>Vendor</button></Link>
          <Link to='/usersignin'>
          <button>User</button></Link>
        </center>
    </div>
  )
}

export default Home
