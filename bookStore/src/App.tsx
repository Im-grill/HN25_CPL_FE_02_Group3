import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CustomerLayout from './shared/layouts/CustomerLayout'
import RelSearchTopSeller from './shared/components/RelSearchTopSeller'
import ProductDetail from './pages/admin/productManagement/productDetail'
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<CustomerLayout />}></Route>
    <Route path='/sell' element={<RelSearchTopSeller />} />
    <Route path="/productdetail" element={<ProductDetail />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
