import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CustomerLayout from "./shared/layouts/CustomerLayout.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
          {/*Customer*/}
              <Route path='/' element={<CustomerLayout/>}></Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
