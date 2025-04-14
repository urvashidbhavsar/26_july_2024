import React, { createContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import TodoList from './pages/TodoList'
import EmployeeReg from './pages/EmployeeReg'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
// import { Provider } from 'react-redux'
// import mystore from './store/store'

// const Usercontext = createContext()
const App = () => {
  return (
    <>
      {/* <Usercontext.Provider></Usercontext.Provider> */}
      {/* <Provider store={mystore}> */}
      {/* <TodoList /> */}
      {/* </Provider> */}
      {/* <EmployeeReg /> */}
      <Router>
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
