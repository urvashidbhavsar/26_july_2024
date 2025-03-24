import React, { useEffect, useState } from 'react'
import { collection, deleteDoc, doc, onSnapshot, query, updateDoc } from 'firebase/firestore'
import db from '../firebase'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

const Todo = () => {
    const [todos, setTodos] = useState([]);
    // permission
    const [isEdit, setIsedit] = useState(false);
    // change title
    const [newtitle, setNewtitle] = useState(todos.title);

    useEffect(() => {
        // fetch data from firestore and display here
        // query for fetch data
        const qry = query(collection(db, "todos"))
        // apply method for retrive data
        const datafetch = onSnapshot(qry, (mydata) => {
            // create array for store and push data
            let todoData = [];
            mydata.forEach((item) => {
                todoData.push({ ...item.data(), id: item.id })
            })
            setTodos(todoData)
        })
        return () => datafetch()
    })

    const handleEdit = async (todo, title) => {
        await updateDoc(doc(db, "todos", todo.id), { title: title })
    }

    const handleDelete = async (id) => {
        await deleteDoc(doc(db, "todos", id))
    }

    const handlesave = (id) => {
        handleEdit(todo, newtitle)
        setIsedit(false)
    }

    return (
        <>
            <Container className='pt-4'>
                <Form>
                    <Row className="g-2">
                        {
                            todos.map(items =>
                                <>
                                    <div className='col-6' key={items.id}>
                                        {
                                            isEdit ?
                                                <Form.Control type="text"
                                                    value={newtitle}
                                                    onChange={(e) => setNewtitle(e.target.value)}
                                                />
                                                :
                                                items.title
                                        }
                                    </div>
                                    <div className="col-3">
                                        {
                                            isEdit ?
                                                <Button variant='primary' className='mx-1' onClick={handlesave}>Update</Button>
                                                :
                                                <>
                                                    <Button variant='primary' className='mx-1' onClick={() => setIsedit(true)}>Edit</Button>
                                                    <Button variant='danger' className='mx-1' onClick={() => handleDelete(items.id)}>Delete</Button>
                                                </>
                                        }
                                    </div>
                                </>
                            )
                        }
                    </Row>
                </Form>
            </Container >
        </>
    )
}

export default Todo
