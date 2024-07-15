import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header({ logo }) {
  const items = useSelector((state) => state.cart.items);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="bg-slate-200">
      <nav className="container  flex items-center justify-between">
        <div className="h-[3rem] logo flex items-center justify-center">
          <img className="h-[100%] scale-150" src={logo} alt="" />
        </div>

        <ul className="hidden lg:flex">
          <li className="mx-4">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-4">
            <Link to="/profile">Profile</Link>
          </li>
          <li className="mx-4">
            <Link to="/">Services</Link>
          </li>
          <li className="mx-4">
            <Link to="/cart" className="relative">
              <i className="fa-solid fa-cart-shopping"></i>
              <span className="absolute top-[-12px] left-[10px] bg-red-600 p-1 rounded-full h-4 w-4 text-lg  flex justify-center items-center">
                {items.length}
              </span>
            </Link>
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
  return (
    <aside
      className={`z-40 fixed top-0 left-0 h-full w-64 bg-white shadow-md transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="p-4 flex justify-between items-center bg-blue-500 text-white">
        <h2>MENU</h2>
        <button onClick={toggleSidebar} className="text-white">
          X
        </button>
      </div>
      <div className="p-4">
        
        <ul className="flex flex-col gap-4 items-center">
          <li className="mx-4">
            <Link to="/" className="text-lg"   onClick={toggleSidebar}>
              Home
            </Link>
          </li>
          <li className="mx-4">
            <Link to="/profile" className="text-lg"   onClick={toggleSidebar}>
              Profile
            </Link>
          </li>
          <li className="mx-4">
            <Link to="/" className="text-lg"   onClick={toggleSidebar}>
              Services
            </Link>
          </li>
          <li className="mx-4">
            <Link to="/cart" className="relative"   onClick={toggleSidebar}>
              <span className="mr-2">cart</span>
            </Link>
          </li>


          <li className="mx-4">
            <Link to="/" className="text-lg"   onClick={toggleSidebar}>
              logout
            </Link>
          </li>
        </ul>



      </div>
    </aside>
  );
}
