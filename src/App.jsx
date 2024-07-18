import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Productview from "./components/Productview";
import Profile from "./components/Profile";
import CartPage from "./components/CartPage";
import UserContext from "./app/context";
import Loader from './components/Loader';
import Dropdown from "./components/Dropdown";

export default function App() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Header logo="/NC2.png" />
      <Dropdown/>
      <UserContext.Provider value={{ setLoading, loading }}>
        {loading && <Loader />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:gender/:category" element={<Products />} />
          <Route path="/products/:gender/:category/:type" element={<Products />} />
          <Route path="/product/:id" element={<Productview />} />
          <Route path="/profile/*" element={<Profile />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </UserContext.Provider>
      <Footer />
    </>
  );
}
