import React from 'react'
import { Navbar, Container, Row, Col , Nav , Table } from "react-bootstrap";
import { Routes, Route } from 'react-router-dom';
import Adhome from './adminhome';
import Viewsp from './viewsp';
import Viewuser from './viewusr';
import Viewreports from './viewreports';
import Navhead from './navhead';
import Footer from '../footer';
export default function () {

  const handleLogout = () => {
    sessionStorage.clear(); 
    window.location.href = "/spLogin"; 
  };
  return (
    <div>
    <Navhead/>
      {/* <Employeeview/> */}
      <Container fluid>
        <Row>
          <Col lg={2} style={{ height: "100vh", backgroundColor: "lightblue" }}>
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link href="/admindash/adminhome">Home</Nav.Link>
              <Nav.Link href="/admindash/viewsp">Service Providers</Nav.Link>
              <Nav.Link href="/admindash/viewusr">Customers </Nav.Link>
              <Nav.Link href="/admindash/viewreports">View Reports</Nav.Link>
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              {/* <Nav.Link eventKey="disabled" disabled>
                Disabled
              </Nav.Link> */}
            </Nav>
          </Col>
          <Col lg={10}>
            {/* <Profile /> */}
            <Routes>
              <Route path="/adminhome" element={<Adhome/>} />
              <Route path="/viewsp" element={<Viewsp />} />
              <Route path="/viewusr" element={<Viewuser />} />
              <Route path="/viewreports" element={<Viewreports/>}/>
            </Routes>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </div>
  );
}