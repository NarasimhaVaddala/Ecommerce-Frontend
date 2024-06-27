import React from 'react'
import "./header.css"
import { Link } from 'react-router-dom'
export default function Header() {
  return (
  <header>

        <nav className='container'>

                <h1 id="logo">
                    nCART
                </h1>

                <ul className='nav-list'>
                    <li><Link to='/'><i className="fa-solid fa-house"></i></Link></li>
                    <li><Link to='/profile'><i className="fa-regular fa-circle-user"></i></Link></li>
                    <li><Link to='/cart'><i className="fa-solid fa-cart-shopping"></i></Link></li>
                </ul>
        </nav>

  </header>
  )
}
