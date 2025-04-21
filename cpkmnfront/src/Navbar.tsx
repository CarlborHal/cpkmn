import React from 'react'
import {Link} from 'react-router-dom';
export default function Navbar() {
  console.log('navbar rendered');
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  )
}
