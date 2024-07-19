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
    <header className="bg-blue-200">
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


  
  const men = {
    topwear: ["shirts", "tshirts"],
    bottomwear: ["jeans", "trousers", "joggers", "cargos"],
    inners: ["boxers","brief","tank"],
    footwear: ["shoes", "sandals", "slides"],
  }
  const women = {
    topwear: ["croptops", "sleeveless", "shirts", "traditional"],
    bottomwear: ["leggings", "trousers", "jeans", "skirts"],
    inners: ["brief", "bra/panty", "slips"],
    footwear: ["shoes", "sandals", "slides"],
  }
 const kids= {
    boys: ["shirts", "trousers", "traditional"],
    girls: ["shirts", "trousers", "traditional"],
    babies: ["combos", "underwear"],
  }


  const items = useSelector((state) => state.cart.items);
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
            <Link to="/cart" className="relative"   onClick={toggleSidebar}>
              <span className="mr-2">cart</span>
            </Link>
          </li>


          <li className="">
            <Link to="/" className="text-lg"   onClick={toggleSidebar}>
              logout
            </Link>
          </li>
        </ul>
<hr />

        <div className="flex flex-col gap-2 mb-1">
              <h3 className="text-xl my-1 font-bold text-blue-800">Men</h3>
              <div className="flex flex-col gap-2">
              {
                    Object.entries(men).map((e, index)=>{
                      return <Dropdown key={e[index]} title={e[0]} text={e[1]} url={`/products/men/${e[0]}`}/>
                    })
              }                
              </div>                
        </div>
        <hr />
        <div className="flex flex-col gap-2 mb-1">
              <h3 className="text-xl my-1 font-bold text-blue-800">Women</h3>
              <div className="flex flex-col gap-2">
              {
                    Object.entries(women).map((e, index)=>{
                      return <Dropdown key={index} title={e[0]} text={e[1]} url={`/products/women/${e[0]}`}/>
                    })
              }                
              </div>                
        </div>
        <hr />
        <div className="flex flex-col gap-2 mb-1">
              <h3 className="text-xl my-1 font-bold text-blue-800">Kids</h3>
              <div className="flex flex-col gap-2">
              {
                    Object.entries(kids).map((e, index)=>{
                      return <Dropdown key={e[index]} title={e[0]} text={e[1]} url={`/products/kids/${e[0]}`}/>
                    })
              }                
              </div>                
        </div>
        <hr />


      </div>
    </aside>
  );
}



function Dropdown({title , text, url}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <button className="flex gap-4 items-center justify-between font-bold" onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <i className="fa-solid fa-chevron-down"></i>
      </button>

      {isOpen && (
        <div className={`flex flex-col gap-2 transition-all ease-in-out duration-1000 overflow-hidden`}>
         {
          text.map((e, index)=>{
            return  <Link key={index} className="capitalize text-sm"  to={`${url}/${e}`}>{e}</Link>
          })
         }
          
        </div>
      )}
    </div>
    
  );
}
