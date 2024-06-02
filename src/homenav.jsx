import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Homenav() {
  return (
    <Navbar expand="lg" className="navHome">
      <Container >
        <Navbar.Brand href="#home" className='font-weight-bold'  style={{color:'brown'}}>Capture-Connect</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home" style={{color:'brown'}}>Home</Nav.Link>
            <Nav.Link href="/about"  style={{color:'brown'}}>About</Nav.Link>
            <Nav.Link href="/spLogin"  style={{color:'brown'}}>Login</Nav.Link>
            <NavDropdown title="Register" id="basic-nav-dropdown" style={{color:'brown'}}className='homeDrop'>
             
              <NavDropdown.Item href="/pgreg">
             Service Provider
              </NavDropdown.Item>
              <NavDropdown.Item href="/usereg">User</NavDropdown.Item>
             
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
