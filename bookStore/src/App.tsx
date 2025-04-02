import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CustomerLayout from './shared/layouts/CustomerLayout'
import RelSearchTopSeller from './shared/components/RelSearchTopSeller'
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<CustomerLayout />}></Route>
    <Route path='/sell' element={<RelSearchTopSeller />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
