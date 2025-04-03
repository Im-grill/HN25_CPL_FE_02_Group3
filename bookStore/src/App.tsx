
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import CustomerLayout from './shared/layouts/CustomerLayout'
import BookSeries from './shared/components/BookSeries'
import RelSearchTopSeller from './shared/components/RelSearchTopSeller'
import ProductDetail from './pages/admin/productManagement/productDetail'
import HomePage from './pages/customer/homePage'
import Confirm from './pages/customer/Confirm'
function App() {


  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<CustomerLayout/>}>
    <Route path="homepage" element={<HomePage/>}/>
    <Route path="bookseries" element={<BookSeries/>}/>
    <Route path="confirm" element={<Confirm/>}/>

    </Route>
   </Routes>
   <Routes>
    {/* <Route path='/' element={<CustomerLayout />}></Route> */}
    <Route path='/sell' element={<RelSearchTopSeller />} />
    <Route path="/productdetail" element={<ProductDetail />} />
    </Routes>
   </BrowserRouter>
  )
}

export default App