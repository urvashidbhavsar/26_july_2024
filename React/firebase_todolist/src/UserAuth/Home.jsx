import React, { useEffect, useState } from 'react'
import { Button, Spinner } from 'react-bootstrap'
import { auth, db } from '../firebase'
import { useNavigate } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'

const Home = () => {
    const navigate = useNavigate();
    const [loguser, setLoguser] = useState(null)

    useEffect(() => {
        const fetchdata = async () => {
            const user = auth.currentUser;
            if (user) {
                const userref = await getDoc(doc(db, "users", user.uid))
                setLoguser(userref.data())
                console.log(userref.data())
            }
        }
        fetchdata()
    }, [])

    const logout = async () => {
        await auth.signOut();
        navigate("/")
    }

    return (
        <>
            <div className='w-50 m-auto shadow p-5 mt-5 text-center'>
                {
                    loguser ?
                        <h1>Welcome to {loguser.fullname}</h1>
                        :
                        <Spinner animation="border" variant="primary" />
                }
                <br /><br />

                <Button variant="danger" type='submit' onClick={logout}>Logout</Button>
            </div>
        </>
    )
}

export default Home
