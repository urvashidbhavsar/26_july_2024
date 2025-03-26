import React from 'react'
import AddTodo from './Pages/AddTodo'
import Todo from './Pages/Todo'
import Login from './UserAuth/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from './UserAuth/Register'
import Home from './UserAuth/Home'

const App = () => {
  return (
    <>
      {/* <AddTodo />
      <Todo /> */}
      <Router>
        <Routes>
          <Route element={<Login />} path='/'></Route>
          <Route element={<Login />} path='/Login'></Route>
          <Route element={<Register />} path='/Register'></Route>
          <Route element={<Home />} path='/Home'></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
