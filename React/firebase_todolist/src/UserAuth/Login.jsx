import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Container, Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase'

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigate("/Home")
        }
        catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <div className='w-50'>
                <Container>
                    <h3>Login</h3>
                    <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>
                        <Button variant="primary" type='submit'>Submit</Button>
                        <Link to="/Register" className='mx-2'>New User?</Link>
                    </Form>
                </Container>
            </div>
        </>
    )
}

export default Login
