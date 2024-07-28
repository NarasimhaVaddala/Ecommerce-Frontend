import React, { useContext, useEffect, useState } from "react";
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
import UserContext from "./app/context";


export default function App() {
  // const [loading, setLoading] = useState(false);
  const token = localStorage.getItem('token')

  const {loading ,setLoading , isAuthenticated, setIsAuthenticated} = useContext(UserContext)

  useEffect(()=>{
      if (token) {
        setIsAuthenticated(true)
        
      }
      else{
        setIsAuthenticated(false)
      }
  },[])
  
  


  return (
    <>
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
          <Route path="/profile/*" element={isAuthenticated?<Profile />:<Login/>} />
          <Route path="/cart" element={isAuthenticated?<CartPage />:<Login/>  } />
          <Route path="/add" element={<Addproduct />} />

        </Routes>
      <Footer />
    </>
  );
}



