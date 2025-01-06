import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../../Pages/Home'
import CartPage from '../../pages/Cart'
import SinglePage from '../../pages/SinglePage'
import Test from '../../pages/test'
import Login from '../../pages/Login'
import Register from '../../pages/Register'

export default function Router() {
  return (
    <div>
      <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/cartSinglePage/:id" element={<SinglePage />} />
        <Route path="/test" element={<Test />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
      </Routes>
      </BrowserRouter>
    </div>
  )
}
