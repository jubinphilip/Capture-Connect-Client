import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Footer from './footer';
export default function About()
{
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={8}>
          <h1>About Us</h1>
          <p>Welcome to our About page!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis justo vel ligula mollis, ac fermentum felis ultrices. Integer ut diam sapien. Aliquam in mi aliquam, consequat magna vitae, semper ex. Nullam ultricies, sapien sit amet aliquam dapibus, est nunc pellentesque nisl, vitae dapibus justo nisi id odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed vulputate bibendum turpis a euismod. Suspendisse potenti.</p>
          <p>Fusce nec metus semper, maximus ligula nec, consequat nisl. Phasellus tempor, dui sit amet ullamcorper condimentum, tortor ex feugiat lacus, non fringilla mauris lorem non ante. Fusce sit amet sodales sem. Curabitur nec turpis fermentum, accumsan velit at, varius lorem. Donec auctor augue nec libero finibus, at lacinia nunc sodales. Integer ac enim non lorem dictum feugiat.</p>
          <p>Nulla facilisi. Vestibulum ac eros nec lacus vestibulum maximus nec ut lorem. Maecenas efficitur, ligula non congue consequat, metus mi ullamcorper lacus, vitae lobortis mi sem vel felis. Sed nec nunc convallis, fermentum ligula vel, rutrum leo. Vivamus vestibulum libero vitae urna lacinia, et fermentum nunc bibendum. Sed convallis tristique luctus. Nulla facilisi. Sed auctor, sapien sit amet scelerisque tempus, magna tellus placerat nisi, sed fringilla ligula nisl vel nisl.</p>
        </Col>
      </Row>
      <Row className="justify-content-md-center mt-5">
        <Col md={4}>
          <Image src="https://i.pinimg.com/originals/e7/5d/db/e75ddbda351d44e24b6b8099fa200aad.jpg" roundedCircle fluid />
          <h3>Our Team</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis justo vel ligula mollis, ac fermentum felis ultrices.</p>
        </Col>
        <Col md={4}>
          <Image src="https://i.pinimg.com/originals/e7/5d/db/e75ddbda351d44e24b6b8099fa200aad.jpg" roundedCircle fluid />
          <h3>Our Mission</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis justo vel ligula mollis, ac fermentum felis ultrices.</p>
        </Col>
        <Col md={4}>
          <Image src="https://i.pinimg.com/originals/e7/5d/db/e75ddbda351d44e24b6b8099fa200aad.jpg" roundedCircle fluid />
          <h3>Our Vision</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis justo vel ligula mollis, ac fermentum felis ultrices.</p>
        </Col>
      </Row>
      <Footer/>
    </Container>

  );
}


