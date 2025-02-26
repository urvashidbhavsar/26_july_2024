import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    let loggeduser = localStorage.getItem("loginuser")

    const logout = () => {
        localStorage.removeItem("loginuser")
        navigate("/")
    }
    return (
        <>
            <div className="container">
                <h2>Welcome to {loggeduser}</h2>
                <button onClick={logout} className='btn btn-danger'>Logout</button>
            </div>
        </>
    )
}

export default Home
