import React from 'react';
import { Navbar, Container, Row, Col, Nav } from "react-bootstrap";
import { Routes, Route } from 'react-router-dom';
import Userhome from './userhome';
import Userviewcp from './userviewcp';
import Userviewpg from './userviewpg';
import Userbookings from './userbookings';
import UserNav from './usernav';
import Footer from '../footer';
import EmailSender from './send-email';

export default function Userdash() {
  const handleLogout = () => {
    sessionStorage.clear(); 
    window.location.href = "/spLogin"; 
  };
  return (
    <div>
      <Container fluid>
        <UserNav />
        <Row>
          <Col lg={2} style={{ height: "100vh", backgroundColor: "yellow", overflowY: 'auto' }}>
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link href="/userdash/userhome">Home</Nav.Link>
              <Nav.Link href="/userdash/userviewpg">Photographers</Nav.Link>
              <Nav.Link href="/userdash/userviewcp">Camera Provider</Nav.Link>
              <Nav.Link href="/userdash/userbookings">My Bookings</Nav.Link>
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            </Nav>
          </Col>
          <Col lg={10} style={{ overflowY: 'auto', height: 'calc(100vh - 56px)' }}> {/* Adjusted height to exclude Navbar */}
            <Routes>
              <Route path="/userhome" element={<Userhome />} />
              <Route path="/userviewpg" element={<Userviewpg />} />
              <Route path="/userviewcp" element={<Userviewcp />} />
              <Route path="/userbookings" element={<Userbookings />} />
            </Routes>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
