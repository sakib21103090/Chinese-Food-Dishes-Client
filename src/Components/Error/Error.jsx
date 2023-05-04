import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Error = () => {
    return (
        <Container className='my-5'>
      <Row>
        <Col md={6} className='text-center'>
          <img src={`https://i.ibb.co/V3LdqTQ/404.png`} alt="" />
        </Col>
        <Col md={6}>
          <h1 className='text-center text-danger my-5'>Oops! Page not found</h1>
          <p className='text-center text-info'>
            We're sorry, but the page you are looking for doesn't exist. Please check the URL and try again.
          </p>
        </Col>
      </Row>
    </Container>
    );
};

export default Error;