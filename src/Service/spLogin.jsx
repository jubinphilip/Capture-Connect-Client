import React from "react";
import { useState } from "react";
import AXIOS from 'axios'
import { Container, Row, Col, Button, Form, Alert } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import Pghome from "./pghome";
import Footer from "../footer";
import Homenav from "../homenav";
import 'react-toastify/dist/ReactToastify.css';
export default function Splogin()
{
    const [record, setRecord] = useState({});
    const [errors, setErrors] = useState({});
    const nav=useNavigate();
//Handle Submission
const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = findErrors();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else 
    {
      const url = "http://localhost:9000/login/";
      AXIOS.post(url, record).then((response) => {
        if(response.data.status===2) {
            alert(response.data.msg);
            window.setTimeout(nav("/admindash"))  
        }
        else if (response.data.status === 0) {
            sessionStorage.setItem("userId", response.data.userId);
            sessionStorage.setItem( "username", response.data.username);
            window.setTimeout(nav("/pghome"))
        }
          else if(response.data.status === 3)
          {
            sessionStorage.setItem("userId", response.data.userId);
            sessionStorage.setItem( "username", response.data.username);
            window.setTimeout(nav("/userdash"))
          }
        else
        {
            toast.error(response.data.msg);
        }
      });
    }
  };
//Sets the value to record
   const setValue = (field, value) => 
   {
        setRecord({ ...record, [field]: value });
        if (!!errors[field]) 
        {
            setErrors({
                ...errors,
                [field]: null
            });
        }
   }
//Validation
   const findErrors = () => {
    const {email, password} = record;
    const newErrors = {};

    if (!email || email === '') {
        newErrors.email = "Email field is required!";
    }
   
    if(!password)
    {
        newErrors.password="This field is required"
    }

    return newErrors;
};


    return (
       
        <div className="loginBody">
        <Homenav/>
        <Container>
       
        <Row className=" justify-content-center ">
        <Col xs={12} className="text-center">
        
    </Col>
                <Col className="border shadow justify-content-center p-4 m-4 rounded-4" lg={6}>
                    <Form  onSubmit={handleSubmit} className="loginForm">
                    <h1>LOGIN</h1>
                        <Form.Group>
                            <Form.Label>UserId</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Your email is your id" onChange={(e)=>setValue(e.target.name,e.target.value)}   />
                            <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" onChange={(e)=>setValue(e.target.name,e.target.value)} isInvalid={!!errors.password}  />
                            <Form.Control.Feedback type='invalid'>{errors.password}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className='pt-3'>
                            <Button type="submit" >Login</Button>
                        </Form.Group>
                    </Form>
                    <ToastContainer/>
                </Col>
            </Row>
        </Container>
        <Footer/>
    </div>
    );
}
