import React from 'react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import './Profile.css';

export default function Profile() {


  const navigate = useNavigate()

  return (
    <>
      <div className='container grid grid-four--cols profile'>

        <Link className="username">

          <i className="fa-regular fa-circle-user" />&nbsp;  Hello Narasimha
        </Link>

        <div className="sidebox">
          <Link to="orders">My Orders</Link>
          <hr />
          <Link to="account">Account Settings</Link>
          <hr />
          <Link to="address">Address</Link>
          <hr />
          <Link  onClick={handleLogout}>Logout</Link>
        </div>
        <div id="mainbox">
          <Routes>
            <Route path="" element={<Orders />} />
            <Route path="orders" element={<Orders />} />
            <Route path="account" element={<Account />} />
            <Route path="address" element={<Address />} />
          </Routes>
        </div>
      </div>

      <BottomCard />
    </>
  );
}

function Orders() {
  return (<>
    <Cartcard />
    <Cartcard />
    <Cartcard />
    <Cartcard />
    <Cartcard />
    <Cartcard />
    <Cartcard />
    <Cartcard />
    <Cartcard />
    <Cartcard />
    <Cartcard />

  </>
  )
}

function Account() {
  return <div className='account'>

    <div className="personalinfo">

      <h2>Personal Information</h2>
      <hr />
      <div style={{ marginTop: "2rem" }}>
        <h3>Your Name</h3>

        <input type="text" name="fname" id="fname" />
        <input type="text" name="lname" id="lname" />

        <button className='edit-btn'>Edit</button>

      </div>

      <div>
        <h3>Your Gender</h3>
        <label htmlFor="male">Male</label>
        <input type="radio" name="gender" id="male" />
        <label htmlFor="male">Female</label>
        <input type="radio" name="gender" id="female" />
        <button className='edit-btn'>Edit</button>
      </div>


      <div>
        <h3>Email Id</h3>
        <input type="email" name="" id="" />
        <button className='edit-btn'>Edit</button>
      </div>

      <div>
        <h3>Mobile</h3>
        <input type="number" name="" id="" />
        <button className='edit-btn'>Edit</button>
      </div>


    </div>


  </div>
}

function Address() {
  return <div className='address'>


    <div className="address-card">
      <div>
        Narasimha | +91 8978106223
      </div>
      <div>
        Plot Number 474 , Hmt Swarnapuri Colony Miypur Hyderabad
      </div>


      <p className='cart-desc btn-group'>Delete <i class="fa-regular fa-trash-can"></i> | Edit <i class="fa-regular fa-edit"></i></p>
    </div>

   
    <div className="address-card">
      <div>
        Narasimha | +91 8978106223
      </div>
      <div>
        Plot Number 474 , Hmt Swarnapuri Colony Miypur Hyderabad
      </div>


      <p className='cart-desc btn-group'>Delete <i class="fa-regular fa-trash-can"></i> | Edit <i class="fa-regular fa-edit"></i></p>
    </div>



  </div>
}

function handleLogout() {
  return navigate("/")
}


function Cartcard() {

  return (
    <>
      <div className="cartcard">


        <div className="cart-img">


          <img src="https://images.bewakoof.com/t640/women-s-black-graphic-printed-slim-fit-short-top-627787-1718703250-1.jpg" alt="" />
        </div>
        <div className="cart-content">
          <h2>ITEM HEADING</h2>

          <p className="cart-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatum beatae </p>

          <p className='cart-desc'>Qty 1</p>

          <h2 className="price">Rs. 1799</h2>



        </div>
      </div>

    </>
  )

}


function BottomCard() {
  return <div className="bottom-card">
    <Link to="orders">
      <i class="fa-solid fa-box"></i>
    </Link>

    <Link to="account">
      <i className="fa-regular fa-circle-user" />
    </Link>

    <Link to="address">
      <i class="fa-regular fa-address-book"></i>
    </Link>
  </div>


}