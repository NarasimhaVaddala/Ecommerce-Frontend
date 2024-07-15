import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Productview from "./components/Productview";
import Profile from "./components/Profile";
import CartPage from "./components/CartPage";

export default function App() {
  return (
    <>
      <Header logo="/NC2.png" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/*" element={<Products />} />
        <Route path="/product/*" element={<Productview />} />
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>

      <Footer />
    </>
  );
}
