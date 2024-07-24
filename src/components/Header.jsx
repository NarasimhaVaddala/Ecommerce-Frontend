import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ProductsDropdown from "./ProductsDropdown";




const token = localStorage.getItem('token')



export default function Header({ logo }) {
  const items = useSelector((state) => state.cart.items);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };


  const handleLogout = ()=>{
    localStorage.clear()
    return navigate('/')
  }


  
  return (
    <header className="bg-blue-200">
      <nav className="container  flex items-center justify-between">
        <div className="h-[3rem] logo flex items-center justify-center">
          <img className="h-[100%] scale-150" src={logo} alt="" />
        </div>

        <ul className="hidden lg:flex">
          <li className="mx-4">
            <Link to="/">
            <i className="fa-solid fa-house fa-lg"></i>
            </Link>
          </li>
          <li className="mx-4">
            <Link to="/profile">
            <i className="fa-solid fa-user-circle fa-lg"></i>
            </Link>
          </li>
         {token && <li className="mx-4">
            <Link onClick={handleLogout}>
            Logout
            </Link>
          </li>}
         
          <li className="mx-4">
            {token && <Link to="/cart" className="relative">
              <i className="fa-solid fa-cart-shopping fa-lg"></i>
              <span className="absolute top-[-12px] left-[10px] bg-red-600 p-1 rounded-full h-4 w-4 text-lg  flex justify-center items-center">
                {items.length}
              </span>
            </Link>}
            
            {!token && <Link to="/login" className="relative">
             Login
            </Link>}
          </li>
        </ul>


        <button
          className="p-2 m-4 bg-blue-500 text-white rounded lg:hidden"
          onClick={toggleSidebar}
        >
          <i className="fa-solid fa-bars text-2xl"></i>
        </button>
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      </nav>

      
    </header>
  );
}

function Sidebar({ isOpen, toggleSidebar }) {

 

  const items = useSelector((state) => state.cart.items);
  const handleLogout = ()=>{
    localStorage.clear()
    return navigate('/')
  }

  return (
    <aside
      className={`z-40 fixed top-0 left-0 h-full w-64 bg-white shadow-md transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="p-4 flex justify-between items-start bg-blue-500 text-white">



        <h2>MENU</h2>
        <button onClick={toggleSidebar} className="text-white">
          X
        </button>
      </div>




      <div className="p-4">
      <ProductsDropdown/>
        
        <ul className="flex flex-col gap-4 items-start mb-2 font-semibold">
          <li className="">
            <Link to="/" className="text-lg"   onClick={toggleSidebar}>
              Home
            </Link>
          </li>
          <li className="">
            <Link to="/profile" className="text-lg"   onClick={toggleSidebar}>
              Profile
            </Link>
          </li>
          <li className="">
            <Link to="/" className="text-lg"   onClick={toggleSidebar}>
              Services
            </Link>
          </li>
          <li className="">

          {token && <Link to="/cart" className="relative"   onClick={toggleSidebar}>
              <span className="mr-2">cart</span>
            </Link>}

          {!token && <Link to="/login" className="relative"   onClick={toggleSidebar}>
              <span className="mr-2">Login</span>
            </Link>}

            
          </li>


          {token && <li className="mx-4">
            <Link onClick={handleLogout}>
            Logout
            </Link>
          </li>}
        </ul>
<hr />


      </div>
    </aside>
  );
}


