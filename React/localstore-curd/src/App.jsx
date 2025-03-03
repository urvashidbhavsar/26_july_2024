import './App.css'
import Login from './Pages/Login.jsx'
import Home from './Pages/Home.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProtectedRoutes from './Services/ProtectedRoutes.jsx'
import Product from './Pages/Product.jsx'
import Showproduct from './Pages/Showproduct.jsx'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Login />} path='/'></Route>
          <Route element={<ProtectedRoutes />} path='/Home'>
            <Route element={<Home />} path='/Home'></Route>
          </Route>
          <Route element={<ProtectedRoutes />} path='/Product'>
            <Route element={<Product />} path='/Product'></Route>
          </Route>
          <Route element={<ProtectedRoutes />} path='/Showproduct'>
            <Route element={<Showproduct />} path='/Showproduct'></Route>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
