
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/customer/homePage'
import CustomerLayout from './shared/layouts/CustomerLayout'
import BookSeries from './shared/components/BookSeries'
import RelSearchTopSeller from './shared/components/RelSearchTopSeller'
import ProductDetail from './pages/admin/productManagement/productDetail'
import AdminLayout from './shared/layouts/AdminLayout'
import Dashboard from './pages/admin/Dashboard'
import CategoryList from './pages/admin/categoryManagement/CategoryList'
import UserProvider from './shared/context/UserContext'
import AlertContext, { AlertProvider } from './shared/context/AlertContext'
import Alert from './shared/components/admin/Alert'
import UserProfile from './pages/customer/views/userProfile'
function App() {


  return (
    <BrowserRouter>
      <UserProvider>
        <AlertProvider>
          <Alert />
          <Routes>
            {/* Customer */}
            <Route path='/' element={<CustomerLayout />}>
              <Route path="homepage" element={<HomePage />} />
              <Route path="bookseries" element={<BookSeries />} />
              <Route path='/sell' element={<RelSearchTopSeller />} />
              <Route path="/productdetail" element={<ProductDetail />} />
              <Route path="/userprofile" element={<UserProfile />} />
            </Route>

            {/* Admin */}
            <Route path='admin' element={<AdminLayout />}>
              <Route index={true} element={<Dashboard />} />
              <Route path='category' element={<CategoryList />} />
            </Route>
          </Routes>
        </AlertProvider>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App