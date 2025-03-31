
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './shared/layout/customer/HomePage'

function App() {


  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<HomePage/>}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
