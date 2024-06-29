import React from 'react'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Loader from './components/Loader/Loader'
import ProductList from './components/ProductList/ProductList'

import DetailedProductView from './components/DetailedProductView/DetailedProductView'
import CartPage from './components/CartPage/CartPage'
import Profile from './components/Profile/Profile'
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'

export default function () {
  return (
    <>
      <Header />

<main>

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/loader' element={<Loader />} />
        <Route path='/products/:title/:category' element={<ProductList />} />
        <Route path='/productView' element={<DetailedProductView />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/login/*' element={<Login/>} />
        <Route path="/profile/*" element={<Profile />} />

      </Routes>
</main>

      <Footer/>
    </>
  )
}
