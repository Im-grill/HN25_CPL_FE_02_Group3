import { useState } from 'react'
import './App.css'
import ProductDetail from './pages/customer/views/productDetail'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/productdetail" element={<ProductDetail />} />

        </Routes>
      </BrowserRouter>
  )
}

export default App