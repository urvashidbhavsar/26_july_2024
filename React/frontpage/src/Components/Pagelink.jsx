import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
const Pagelink = () => {
  return (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/Account">Account</Link></li>
      <li><Link to="/About">About</Link></li>
      <li><Link to="/Contact">Contact</Link></li>
    </>
  )
}

export default Pagelink