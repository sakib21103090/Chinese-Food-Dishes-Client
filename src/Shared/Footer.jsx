import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container fluid className="bg-success text-white mt-4">
      <Row>
        <Col md={4}>
          <h4>Location</h4>
          <p>China</p>
          <p>Best chef in the world</p>
        </Col>
        <Col md={4}>
           <h4> Area</h4>
          <p> Guangdong</p>
          <p>Guizhou</p>
          <p>Hainan</p>
          <p>Xui</p>

        </Col>
        <Col md={4}>
        <h4>Contact</h4>
          <p>phone:01xxxxxxx</p>
          <p>Hotline: 0xxxxxxx</p>
          <p>Email: info@4598.com</p>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <p>&copy; 2023 Chinese chefs. All rights reserved.</p>
        </Col>
      </Row>
    </Container>
    );
};

export default Footer;