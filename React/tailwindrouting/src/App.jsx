import './App.css'
import Apply from './Apply'
import Navbar from './Navbar'
import Resonsive from './Resonsive'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Account from './Pages/Account'
import About from './Pages/About'
import Contact from './Pages/Contact'
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element="" />
          <Route path='/Account' element={<Account />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </Router>

      {/* <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1> */}
      {/* <Apply /> */}
      {/* <Resonsive /> */}
    </>
  )
}

export default App
