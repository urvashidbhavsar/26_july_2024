import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    const [input, setInput] = useState({
        username: "",
        email: "",
        mobileno: "",
        password: "",
    })
    const handlechange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const submitdata = () => {
        let getusers = JSON.parse(localStorage.getItem("userdata")) || []
        let existuser = [...getusers, input]
        localStorage.setItem("userdata", JSON.stringify(existuser))
        alert("data added successfully")
    }

    return (
        <>
            <div className="container">
                <div className='w-50 shadow p-4 m-auto mt-5'>
                    <h2>Registration</h2>
                    <form onSubmit={submitdata}>
                        <div className="row g-2 ">
                            <div className="col-12">
                                <input type="text" placeholder='Username' className='form-control' value={input.username} onChange={handlechange} name='username' />
                            </div>
                            <div className="col-12">
                                <input type="text" placeholder='Email' className='form-control' value={input.email} onChange={handlechange} name='email' />
                            </div>
                            <div className="col-12">
                                <input type="number" placeholder='Mobile No' className='form-control' value={input.mobileno} onChange={handlechange} name='mobileno' />
                            </div>
                            <div className="col-12">
                                <input type="password" placeholder='Password' className='form-control' value={input.password} onChange={handlechange} name='password' />
                            </div>
                            <div className="col-12">
                                <button className='btn btn-primary'>Register</button>
                            </div>
                            <div className="col-12">
                                <p>Already have account?
                                    <Link to="/">Login</Link>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register
