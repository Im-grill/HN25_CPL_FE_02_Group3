
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/customer/homePage'
import CustomerLayout from './shared/layouts/CustomerLayout'
import BookSeries from './shared/components/BookSeries'

function App() {


  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<CustomerLayout/>}>
    <Route path="homepage" element={<HomePage/>}/>
    <Route path="bookseries" element={<BookSeries/>}/>
    </Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
