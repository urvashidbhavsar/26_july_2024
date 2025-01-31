import React from 'react'
import { Link } from 'react-router-dom'
import PageLink from './pageLink'

const Navbar = () => {
    return (
        <>
            <div className="container mx-auto">
                <div className="navbar flex justify-between items-center">
                    <div className="logo">
                        <h1 className='text-3xl'>Logo</h1>
                    </div>
                    <div className="nav">
                      /
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
