import React from 'react'
import Pagelink from './Pagelink'

const Navbar = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="navbar flex justify-between items-center">
          <div className="logo">
            <h1 className="text-3xl"> Logo </h1>
          </div>
          <div className="nav">
            <Pagelink />
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
