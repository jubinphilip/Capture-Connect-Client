import React from "react";
import { useState } from "react";
import AXIOS from 'axios'
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
export default function Addsamples()
{
    const[record,setRecord]=useState({})
    const [img,setImg]=useState(null)
    const[image,setImage]=useState({})
    const formdata=new FormData();
    const phgrid=sessionStorage.getItem('userId')

//Handle Submission
const handleSubmit = (e) => {
    e.preventDefault();
      const formdata = new FormData();
      formdata.append('amount', record.amount);
      for(let i=0; i<img.length;i++){
        formdata.append('images',img[i]);
      }
      
      const url = `http://localhost:9000/addsamples/${phgrid}`;
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
    
  };
//Sets the value to record
   const setValue = (field, value) => 
   {
        setRecord({ ...record, [field]: value });
   }


    return (
        <Container>
       
        <Row className=" justify-content-center ">
        <Col xs={12} className="text-center">
        <h1>Add Sample Photographs</h1>
    </Col>
                <Col className="border shadow justify-content-center p-4 m-4 rounded-4" lg={6}>
                    <Form  encType='multipart/form-data' onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Add Images</Form.Label>
                            <Form.Control type="file"  name='imag' multiple onChange={(e) => setImg(e.target.files)}  />
                        </Form.Group>
                    <Form.Group>
                    <Form.Label>Amount</Form.Label>
                    <Form.Control type="text" name="amount" placeholder="Enter Rate" onChange={(e)=>setValue(e.target.name,e.target.value)}  />

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
