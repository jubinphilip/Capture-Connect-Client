import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import AXIOS from 'axios'
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import ViewRating from './viewrating';
export default function Userrating() {
    const params = useParams();
    const id = params.id;
    const idn = sessionStorage.getItem("userId");
    const name = sessionStorage.getItem("username");
    const [record, setRecord] = useState({ review: '', rating: '' });

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        const url = "http://localhost:9000/userrating";
        
        // Include id and idn in the data object
        const data = {
            ...record,
            username: name, 
            spid: id, 
        };

        AXIOS.post(url, data).then((response) => {
            if (response.data.status === 0) {
                alert(response.data.msg);
            } else {
                alert(response.data.msg);
            }
        });
    }

    const setValue = (field, value) => {
        setRecord({ ...record, [field]: value });
    }

    return (
        <div>
            <h1>Hello {id}{idn}</h1>
            <Col className="border shadow justify-content-center p-4 m-4 rounded-4" lg={6}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label className='name'>Review</Form.Label>
                        <Form.Control type="text" name="review" onChange={(e) => setValue(e.target.name, e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Rating</Form.Label>
                        <Form.Control as="select" name="rating" value={record.rating} onChange={(e) => setValue(e.target.name, e.target.value)}>
                            <option value="">Select Rating</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className='pt-3'>
                        <Button type="submit">Submit</Button>
                    </Form.Group>
                </Form>
            </Col>
        <ViewRating/>
        </div>
    );
}
