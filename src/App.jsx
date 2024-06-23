import React from 'react'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Loader from './components/Loader/Loader'
import ProductList from './components/ProductList/ProductList'

export default function () {
  return (
    <>
        <Header/>

        <Routes>

    <Route path='/' element={<Home/>} />
    <Route path='/loader' element={<Loader/>} />
    <Route path='/products/:title/:category' element={<ProductList/>} />

        </Routes>

  
    </>
  )
}
