import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import HomePage from './pages/customer/views/homePage'
import CustomerLayout from './shared/layouts/CustomerLayout'
import ProductDetail from './pages/admin/productManagement/productDetail'
import AdminLayout from './shared/layouts/AdminLayout'
import Dashboard from './pages/admin/Dashboard'
import CategoryList from './pages/admin/categoryManagement/CategoryList'
import UserProvider from './shared/context/UserContext'
import {AlertProvider} from './shared/context/AlertContext'
import Alert from './shared/components/admin/Alert'
import UserProfile from './pages/customer/views/userProfile'
import Confirm from './pages/customer/views/Confirm'
import AddBook from './pages/admin/bookManagement/AddBook'
import Order from './pages/customer/views/order'

function App() {


    return (
        <BrowserRouter>
            <UserProvider>
                <AlertProvider>
                    <Alert/>
                    <Routes>
                        {/* Customer */}
                        <Route path='/' element={<CustomerLayout/>}>
                            <Route path="homepage" element={<HomePage/>}/>
                            <Route path="/productdetail" element={<ProductDetail/>}/>
                            <Route path="/userprofile" element={<UserProfile/>}/>
                            <Route path="confirm" element={<Confirm/>}/>
                        </Route>
                        <Route path = 'order' element={<Order/>}></Route>

                        {/* Admin */}
                        <Route path='admin' element={<AdminLayout/>}>
                            <Route index={true} element={<Dashboard/>}/>
                            <Route path='category' element={<CategoryList/>}/>
                            <Route path='add/book' element={<AddBook/>}/>
                        </Route>
                    </Routes>
                </AlertProvider>
            </UserProvider>
        </BrowserRouter>
    )
}

export default App
