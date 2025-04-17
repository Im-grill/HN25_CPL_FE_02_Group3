import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/customer/views/homePage'
import CustomerLayout from './shared/layouts/CustomerLayout'
import ProductDetail from './pages/customer/views/productDetail'
import AdminLayout from './shared/layouts/AdminLayout'
import Dashboard from './pages/admin/Dashboard'
import CategoryList from './pages/admin/categoryManagement/CategoryList'
import UserProvider from './shared/context/UserContext'
import { AlertProvider } from './shared/context/AlertContext'
import Alert from './shared/components/admin/Alert'
import Confirm from './pages/customer/views/Confirm'
import BookForm from './pages/admin/bookManagement/BookForm'
import Order from './pages/customer/views/order'
import BookListManagement from './pages/admin/bookManagement/BookList'
import OrderList from './pages/admin/orderMangement/orderList'
import UserList from './pages/admin/userManagement/userList'
import UserProfileListOrder from './pages/customer/views/userProfile_ListOrders'
import AdminRoute from './routes/AdminRoute';
import ProtectedRoute from './routes/ProtectedRoute'
import UserProfileOrderDetails from './pages/customer/views/userProfile_OrderDetail'
import UserInfo from './pages/customer/views/userProfile_UserInfo'
import { ModalProvider } from './shared/context/ModalContext'

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <AlertProvider>
          <ModalProvider>
            <Alert />
            <Routes>
              {/* Customer */}
              <Route element={<CustomerLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="productdetail/:id" element={<ProductDetail />} />
                <Route path="userprofile/order/:orderId" element={<UserProfileOrderDetails />} />
                <Route path="userprofile/orders" element={<ProtectedRoute> <UserProfileListOrder /> </ProtectedRoute>} />
                <Route path="userprofile/info" element={<UserInfo />} />
                <Route path="order" element={<ProtectedRoute> <Order /> </ProtectedRoute>} />
                <Route path="confirm" element={<Confirm />} />
              </Route>

              {/* Admin */}
              <Route path='admin' element={<AdminRoute />}>
                <Route element={<AdminLayout />}>
                  <Route index element={<Dashboard />} />
                  <Route path='category' element={<CategoryList />} />
                  <Route path='book/add' element={<BookForm />} />
                  <Route path='book/list' element={<BookListManagement />} />
                  <Route path='order' element={<OrderList />} />
                  <Route path='user' element={<UserList />} />
                </Route>
              </Route>
            </Routes>
          </ModalProvider>
        </AlertProvider>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App
