import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'

export default function () {
  return (
    <>
        <Header/>

        <Routes>

    <Route path='/' element={<Home/>} />

        </Routes>

  
    </>
  )
}
