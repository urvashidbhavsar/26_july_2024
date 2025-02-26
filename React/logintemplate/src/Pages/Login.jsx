import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()

    const [login, setLogin] = useState({
        username: "",
        password: "",
    })

    const handleChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value })
    }

    const loginUser = () => {
        let getusers = JSON.parse(localStorage.getItem("userdata"))
        let filteruser = getusers.find((user) => user.username === login.username && user.password === login.password)
        if (filteruser) {
            localStorage.setItem("loginuser", login.username)
            navigate("/Home")
        } else {
            alert("fail")
        }

    }

    return (
        <>
            <div className="container">
                <div className='w-50 shadow p-4 m-auto mt-5 '>
                    <h2>Login</h2>
                    <div className="row g-2 ">
                        <div className="col-12">
                            <input type="text" placeholder='Username' className='form-control' value={login.username} name='username' onChange={handleChange} />
                        </div>
                        <div className="col-12">
                            <input type="password" placeholder='Password' className='form-control' value={login.password} name='password' onChange={handleChange} />
                        </div>
                        <div className="col-12">
                            <button className='btn btn-primary' onClick={loginUser}>Login</button>
                        </div>
                        <div className="col-12">
                            <p>New User?
                                <Link to="/Register">Register</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
