import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Home from './Pages/Home'
import Loginservice from './Service/Loginservice'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<Login />} path='/'></Route>
          <Route element={<Register />} path='/Register'></Route>
          <Route element={<Loginservice />} path='/Home'>
            <Route element={<Home />} path='/Home'></Route>
          </Route>
        </Routes>
      </Router>
      {/* <Login /> */}
      {/* <Register /> */}
    </>
  )
}

export default App
