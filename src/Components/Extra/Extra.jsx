import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const Extra = () => {
    return (
        <div className='mt-4'>

          <div>
            <h2 className='text-center m-4'> Chinese Best Noodles</h2>
          </div>
            <Container>
      <Row>
      <Col sm={8}>
         <div className='card m-4'>
      <Row>
      <Col sm={8}>
         
      <img className='mt-4 mb-4' src={`https://i.ibb.co/GnvHTqP/download-7.jpg`} alt="" />
      </Col>
        <Col sm={4}>
        <h4>Mixian</h4>
        <p>China's Yunnan Province is known for its rice noodles, and this noodle soup dish is very popular there. It's a great mixture of textures and flavors––spicy, tangy, and savory all at once!</p>
        <button className='btn btn-primary mb-2'>Buy now</button>
          </Col>
      </Row>
      </div>
         <div className='card m-4'>
      <Row>
      <Col sm={8}>
         
      <img className='mt-4 mb-4' src={`https://i.ibb.co/zHtJTrL/ae09eae7d55745b19059dbe883da3829.jpg`} alt="" />
      </Col>
        <Col sm={4}>
        <h4>Dan Dan noodles</h4>
        <p>The chili oil and peppercorns add much of the spice while the sui mi ya cai (preserved mustard greens) provides a balanced sweet</p>
        <button className='btn btn-primary mb-2'>Buy now</button>
          </Col>
      </Row>
      </div>
         <div className='card m-4'>
      <Row>
      <Col sm={8}>
         
      <img className='mt-4 mb-4' src={`https://i.ibb.co/0nWsw14/download-8.jpg`} alt="" />
      </Col>
        <Col sm={4}>
        <div>
          <h4>Lo mein</h4>
        <p> chow mein means fried noodles and lo mein translates to tossed or stirred noodles. Because both dishes are variations of noodles, the main difference in chow mein and lo mein lies in how the noodles are prepared.</p>
        <button className='btn btn-primary mb-2'>Buy now</button>
        </div>
          </Col>
      </Row>
      </div>
      </Col>
        <Col sm={4}>
        <div className='mt-4'>
      
        <Card style={{ width: '18rem' }}>
        <Card.Title className='text-center text-info mb-6 mt-2'>The best chef In china</Card.Title>
      <Card.Img className='m-2 img-fluid' variant="top" src={`https://i.ibb.co/K9XGYv5/images-3.jpg`} />
      <Card.Body>
        <Card.Title className='text-center text-info'>Name :Zhou Guizhen</Card.Title>
        <Card.Text>
         <p> Known as the "Noodle Master," Zhou has been making hand-pulled noodles for over 40 years. She owns a small noodle shop in northwest China and is famous for her incredible skill and speed in making noodles.</p>
        </Card.Text>
        <Button variant="primary">About More</Button>
      </Card.Body>
    </Card>
        </div>
          </Col>
      </Row>
    
    </Container>
        </div>
    );
};

export default Extra;