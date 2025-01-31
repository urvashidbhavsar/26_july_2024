import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Topnav from './Components/Topnav/Topnav'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import About from './Pages/About'
import Account from './Pages/Account'
import Contact from './Pages/Contact'
import Navbar from './Components/Navbar'

function App() {
  return (
    <>
      {/* <Topnav /> */}
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element=""></Route>
          <Route path='/Account' element={<Account />}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='/Contact' element={<Contact />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
