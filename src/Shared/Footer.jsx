import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container fluid className="bg-dark text-white">
      <Row>
        <Col md={4}>
          <h4>Location</h4>
          <p>123 Main St</p>
          <p>Anytown, USA</p>
        </Col>
        <Col md={4}>
          <h4>Hours</h4>
          <p>Monday - Friday: 11am - 9pm</p>
          <p>Saturday: 12pm - 10pm</p>
          <p>Sunday: Closed</p>
        </Col>
        <Col md={4}>
          <h4>Contact Us</h4>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@chineserestaurant.com</p>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <p>&copy; 2023 Chinese Restaurant. All rights reserved.</p>
        </Col>
      </Row>
    </Container>
    );
};

export default Footer;