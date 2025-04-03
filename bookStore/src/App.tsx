import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/customer/homePage'
import CustomerLayout from './shared/layouts/CustomerLayout'
import BookSeries from './shared/components/BookSeries'
import RelSearchTopSeller from './shared/components/RelSearchTopSeller'
import ProductDetail from './pages/admin/productManagement/productDetail'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CustomerLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="bookseries" element={<BookSeries />} />
          <Route path="relsearchtopseller" element={<RelSearchTopSeller />} />
          <Route path="productdetail" element={<ProductDetail />} />
        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App