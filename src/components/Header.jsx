import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'


export default function Header({logo}) {
  const items = useSelector((state) => state.cart.items);
  return (
    <header className='bg-slate-200'>
        <nav className='container  flex items-center justify-between'>

                <div className="h-[3rem] logo flex items-center justify-center">
                    <img className="h-[100%] scale-150" src={logo} alt="" />
                </div>



                <ul className='hidden sm:flex'>
                    <li className='mx-4'><Link to="/">Home</Link></li>
                    <li className='mx-4'><Link to="/profile">Profile</Link></li>
                    <li className='mx-4'><Link to="/">Services</Link></li>
                    <li className='mx-4'>
                      <Link to='/cart' className='relative'>
                          <i className="fa-solid fa-cart-shopping"></i>
                          <span className='absolute top-[-12px] left-[10px] bg-red-600 p-1 rounded-full h-4 w-4 text-lg  flex justify-center items-center'>{items.length}</span> 
                      </Link>
                     </li>
                </ul>



                <button id="togglebtn" className='sm:hidden'>
                      <i className="fa-solid fa-bars text-2xl"></i>
                </button>
        </nav>
    </header>
  )
}
