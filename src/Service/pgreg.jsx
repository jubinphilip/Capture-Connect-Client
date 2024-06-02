import React from "react";
import { useState } from "react";
import AXIOS from 'axios'
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
export default function Pgregister()
{
    const [record, setRecord] = useState({});
    const [errors, setErrors] = useState({});
    const[image,setImage]=useState({})
    const formdata=new FormData();
//Handle Submission
const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = findErrors();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      const formdata = new FormData();
      formdata.append('fullname', record.fullname);
      formdata.append('email', record.email);
      formdata.append('number', record.number);
      formdata.append('service',record.service)
      formdata.append('place', record.place);
      formdata.append('device', record.device);
      formdata.append('amount', record.amount);
      formdata.append('description', record.description);
      formdata.append('password', record.password);
      formdata.append('image', record.image);
      const url = "http://localhost:9000/pgregister/";
      AXIOS.post(url, formdata, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((response) => {
        if (response.data.status === 1) {
          alert(response.data.msg);
        } else {
          alert(response.data.msg);
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
    const re =/^(([^<>()[\]\.,;:\s@"]+(\.[^<>()[\]\.,;:\s@"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
    const { fullname, email, number,place,device,description,password,cpassword, } = record;
    const newErrors = {};
  
    if (!fullname || fullname === "") {
      newErrors.fullname = "Fullname field is required";
    } else if (fullname.length > 30) {
      newErrors.fullname = "Content is too long";
    }
  
    if (!email || email === '') {
      newErrors.email = "Email field is required!";
    } else if(!re.test(email))
    {
         newErrors.email="Email format not supported";
    }
  
    if(!number || number.length!=10)
    {
        newErrors.number="Enter a 10 digit number"
    }
  
    if(!place)
    {
        newErrors.place="Place is required";
    }
  
    if(!device)
    {
        newErrors.device="Device type is required";
    }
  
    if(!description)
    {
        newErrors.description= "Description is required"
    }
  
    if(!password)
    {
        newErrors.password="This field is required"
    }
  
    if(password != cpassword)
    {
        newErrors.password="Password must be same"
    }
  
    return newErrors;
  };


    return (
        <Container>
       
        <Row className=" justify-content-center ">
        <Col xs={12} className="text-center">
        <h1>Register</h1>
    </Col>
                <Col className="border shadow justify-content-center p-4 m-4 rounded-4" lg={6}>
                    <Form  encType='multipart/form-data' onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label className='name'>Fullname</Form.Label>
                            <Form.Control type="text" name="fullname" onChange={(e)=>setValue(e.target.name,e.target.value)} isInvalid={!!errors.fullname}  />
                            <Form.Control.Feedback type='invalid'>{errors.fullname}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" onChange={(e)=>setValue(e.target.name,e.target.value)}   />
                            <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="number" name="number" onChange={(e)=>setValue(e.target.name,e.target.value)}  />
                            <Form.Control.Feedback type='invalid'>{errors.number}</Form.Control.Feedback>
                        </Form.Group>

                        
                        <Form.Group>
                            <Form.Label>Choose Service</Form.Label>
                            <Form.Control as="select"  name="service" onChange={(e)=>{ setValue(e.target.name,e.target.value)}} isInvalid={!!errors.service}>
                            <option value="">Select One From List</option>
                            <option value="Photographer">Photographer</option>
                            <option value="CameraOwner">Camera Provider</option>
                        </Form.Control>
                      </Form.Group>

                        <Form.Group>
                            <Form.Label>Profile Image</Form.Label>
                            <Form.Control type="file" name="image" onChange={(e) => setValue(e.target.name, e.target.files[0] )}  />
                        </Form.Group>

                        <Form.Group>
                        <Form.Label>Place</Form.Label>
                        <Form.Control type="text" name="place" onChange={(e)=>setValue(e.target.name,e.target.value)}  />
                        <Form.Control.Feedback type='invalid'>{errors.place}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Device</Form.Label>
                        <Form.Control type="text" name="device" onChange={(e)=>setValue(e.target.name,e.target.value)}  />
                        <Form.Control.Feedback type='invalid'>{errors.device}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group>
                    <Form.Label>Amount</Form.Label>
                    <Form.Control type="text" name="amount" placeholder="Enter amount per day" onChange={(e)=>setValue(e.target.name,e.target.value)}  />

                </Form.Group>

                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" name="description" onChange={(e)=>setValue(e.target.name,e.target.value)}  />
                        <Form.Control.Feedback type='invalid'>{errors.description}</Form.Control.Feedback>
                    </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" onChange={(e)=>setValue(e.target.name,e.target.value)} isInvalid={!!errors.password}  />
                            <Form.Control.Feedback type='invalid'>{errors.password}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                        <Form.Label> Confirm Password</Form.Label>
                        <Form.Control type="password" name="cpassword" onChange={(e)=>setValue(e.target.name,e.target.value)}  />
                        <Form.Control.Feedback type='invalid'>{errors.password}</Form.Control.Feedback>
                    </Form.Group>

                        <Form.Group className='pt-3'>
                            <Button type="submit" > Submit</Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
