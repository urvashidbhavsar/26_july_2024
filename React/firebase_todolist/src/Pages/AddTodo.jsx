import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import db from '../firebase';
import { addDoc, collection } from 'firebase/firestore';

const AddTodo = () => {
    const [title, setTitle] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (title != "") {
            // addDoc() => help to add data on store
            // collection() => table 
            // db = import from firebase.js which is firestore
            // 'todos' = table name
            await addDoc(collection(db, 'todos'), {
                title: title,
                completed: false
            });
            alert('Data Added Successfully');
            setTitle('');
        }
    }

    return (
        <>
            <Container>
                <Form className='mt-5' onSubmit={handleSubmit}>
                    <Row>
                        <Col>
                            <Form.Control type="text" placeholder="Enter Todos" value={title} onChange={(e) => setTitle(e.target.value)} />
                        </Col>

                        <Col>
                            <Button variant="primary" type="submit">Add </Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </>
    )
}

export default AddTodo
