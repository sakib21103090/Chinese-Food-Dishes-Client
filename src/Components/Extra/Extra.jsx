import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const Extra = () => {
    return (
        <div>
            <Container>
      <Row>
      <Col sm={8}>

      <Container>
          <Row>
            
         <Col className='mt-4'   md={4}>
         <Container>
          <Row>
            
         <Col className='mt-4'   md={4}>
              <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
 </Col>

          </Row>
     </Container>
 </Col>

          </Row>
     </Container>

      </Col>
        <Col sm={4}>sm=4</Col>
      </Row>
      
    </Container>
        </div>
    );
};

export default Extra;