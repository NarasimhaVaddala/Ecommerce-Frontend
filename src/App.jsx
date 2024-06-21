import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Loader from './components/Loader/Loader'

export default function () {
  return (
    <>
        <Header/>

        <Routes>

    <Route path='/' element={<Home/>} />
    <Route path='/loader' element={<Loader/>} />

        </Routes>

  
    </>
  )
}
