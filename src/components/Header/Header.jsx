import React from 'react'
import "./header.css"
export default function Header() {
  return (
  <header>

        <nav className='container'>

                <h1 id="logo">
                    nCART
                </h1>

                <ul className='nav-list'>
                    <li><a href='/'><i className="fa-solid fa-house"></i></a></li>
                    <li><a href='/'><i className="fa-regular fa-circle-user"></i></a></li>
                    <li><a href='/'><i className="fa-solid fa-cart-shopping"></i></a></li>
                </ul>
        </nav>

  </header>
  )
}
