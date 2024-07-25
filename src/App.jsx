import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Productview from "./components/Productview";
import Profile from "./components/Profile";
import CartPage from "./components/CartPage";
import Loader from './components/Loader';
import Addproduct from './components/AddProduct'
import Login from "./components/Login";
import Signup from "./components/Signup";
import { UserProvider } from './app/context.jsx';

export default function App() {
  const [loading, setLoading] = useState(false);
  const [login,setlogin] = useState(false)
  const token = localStorage.getItem('token')
  
  const isLogin = ()=>{
    if (token) {
        setlogin(true)
    }
    else{
      setlogin(false)
    }
  }


  useEffect(()=>{
        isLogin()
  },[token, login])


  return (
    <>
      <UserProvider>
      <Header logo="/NC2.png" />
      {/* <ProductsDropdown/> */}
        {loading && <Loader />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/products/:gender/:category" element={<Products />} />
          <Route path="/products/:gender/:category/:type" element={<Products />} />
          <Route path="/product/:id" element={<Productview />} />
          <Route path="/profile/*" element={login?<Profile />:<Login/>} />
          <Route path="/cart" element={login?<CartPage />:<Login/>  } />
          <Route path="/add" element={<Addproduct />} />

        </Routes>
      </UserProvider>
      <Footer />
    </>
  );
}



