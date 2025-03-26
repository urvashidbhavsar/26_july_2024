import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Container, Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'
import { auth, db } from '../firebase'
import { setDoc, doc } from 'firebase/firestore'

const Register = () => {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            if (user) {
                await setDoc(doc(db, "users", user.uid), {
                    fullname: fullname,
                    email: user.email
                })
                alert("User added successfully")
                setFullname("")
                setEmail("")
                setPassword("")
            }
        } catch (e) {
            console.log(e);
            alert("Error (auth/email-already-in-use)")
        }
    }

    return (
        <>
            <div className='w-50'>
                <Container>
                    <h3>Register</h3>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" placeholder="Full name" value={fullname} onChange={(e) => setFullname(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>
                        <Button variant="primary" type='submit'>Register</Button>
                        <Link to="/" className='mx-2'>An Existing User?</Link>
                    </Form>
                </Container>
            </div>
        </>
    )
}

export default Register
