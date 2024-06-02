import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
export default function Navhead()
{
    return(
    <>
    <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand>Capture Connect</Navbar.Brand>
          
        </Container>
      </Navbar>
    </>)
}