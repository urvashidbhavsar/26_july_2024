import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <div className="container">
                <div className='w-50 shadow p-4 m-auto mt-5 '>
                    <h2>Login</h2>
                    <div className="row g-2 ">
                        <div className="col-12">
                            <input type="text" placeholder='Username' className='form-control' />
                        </div>
                        <div className="col-12">
                            <input type="password" placeholder='Password' className='form-control' />
                        </div>
                        <div className="col-12">
                            <button className='btn btn-primary'>Login</button>
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
