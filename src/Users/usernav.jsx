import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Users/logo.jpg'
export default function UserNav()
{
    return(
    <>
    <Navbar bg="light" data-bs-theme="light">
        <Container>
        <img src={logo}  style={{ height: "60px", width:"60px",borderRadius:"50%"}}/>
          <Navbar.Brand >Capture Connect</Navbar.Brand>
          
        </Container>
      </Navbar>
    </>)
}