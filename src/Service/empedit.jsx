import React, { useEffect, useRef, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import AXIOS from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Useredit() {
  const params = useParams();
  const refitem = useRef();
  const idn = sessionStorage.getItem("userId");
  const [record, setRecord] = useState({ 'userid': idn, 'fullname': '', 'email': '' });

  useEffect(() => {
    const url = `http://localhost:9000/getuser/${idn}`;
    AXIOS.get(url)
      .then((res) => {
        const datas = res.data;
        const form = refitem.current;
        if (form) {
          form['fullname'].value = datas[0].fullname;
          form['email'].value = datas[0].email;
          // Update state with fetched values
          setRecord({ ...record, 'fullname': datas[0].fullname, 'email': datas[0].email });
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        // Handle error, e.g., display a toast message
        toast.error("Error fetching user data");
      });
  }, [idn]);

  const updatehandler = (e) => {
    e.preventDefault();
    const url = "http://localhost:9000/empedit";
    AXIOS.post(url, record)
      .then((res) => {
        alert(res.data.message);
      })
      .catch((error) => {
        console.error("Error updating user data:", error);
        // Handle error, e.g., display a toast message
        toast.error("Error updating user data");
      });
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Form ref={refitem} onSubmit={updatehandler}>
              <Form.Group>
                <Form.Label>Fullname</Form.Label>
                <Form.Control
                  type="text"
                  name="fullname"
                  value={record.fullname} // Update value from state
                  onChange={(e) => {
                    setRecord({ ...record, 'fullname': e.target.value }); // Update only 'fullname' field
                  }}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  value={record.email} // Update value from state
                  onChange={(e) => {
                    setRecord({ ...record, 'email': e.target.value }); // Update only 'email' field
                  }}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Button type="submit">Update</Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </>
  );
}
