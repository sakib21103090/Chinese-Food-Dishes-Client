import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const Extra = () => {
    return (
        <Container className='mt-4 Back rounded'>

          <div>
            <h2 className='text-center Text1 m-4'> Chinese Best Noodles</h2>
          </div>
            <Container className='Bcc'>
      <Row>
      <Col sm={8}>
         <div className='card m-4 Bc'>
      <Row>
      <Col sm={8}>
         
      <img className='mt-4 mb-4  ms-4' weight={240} src={`https://i.ibb.co/GnvHTqP/download-7.jpg`} alt="" />
      </Col>
        <Col sm={4}>
        <h4 className='Text-2'>Mixian</h4>
        <p>China's Yunnan Province is known for its rice noodles, and this noodle soup dish is very popular there. It's a great mixture of textures and flavors––spicy, tangy, and savory all at once!</p>
        <button className='Bcn rounded mb-2'>Buy now</button>
          </Col>
      </Row>
      </div>
         <div className='card m-4 Bc'>
      <Row>
      <Col sm={8}>
         
      <img className='mt-4 mb-4 ms-4' src={`https://i.ibb.co/zHtJTrL/ae09eae7d55745b19059dbe883da3829.jpg`} alt="" />
      </Col>
        <Col sm={4}>
        <h4 className='Text-2'>Dan Dan noodles</h4>
        <p>The chili oil and peppercorns add much of the spice while the sui mi ya cai (preserved mustard greens) provides a balanced sweet</p>
        <button className='Bcn rounded mb-2'>Buy now</button>
          </Col>
      </Row>
      </div>
         <div className='card m-4 Bc'>
      <Row>
      <Col sm={8}>
         
      <img className='mt-4 mb-4 ms-4' src={`https://i.ibb.co/0nWsw14/download-8.jpg`} alt="" />
      </Col>
        <Col sm={4}>
        <div>
          <h4>Lo mein</h4>
        <p> chow mein means fried noodles and lo mein translates to tossed or stirred noodles. Because both dishes are variations of noodles, the main difference in chow mein and lo mein lies in how the noodles are prepared.</p>
        <button className='Bcn rounded mb-2'>Buy now</button>
        </div>
          </Col>
      </Row>
      </div>
      </Col>
        <Col sm={4}>   
        <Col className='mt-4'   md={4}>
            <Card style={{ width: '18rem' }}>
         
           <Card.Img variant="top" height ={240} src={`https://i.ibb.co/kckxT4q/download-10.jpg`} />
          <Card.Body className='Bc'>
          <Card.Title className='Text1 mb-6 mt-2'>The best chef In china</Card.Title>
          <Card.Title className=' Text-1'>Name :Zhou Guizhen</Card.Title>
        <Card.Text>
         <p> Known as the "Noodle Master," Zhou has been making hand-pulled noodles for over 40 years. She owns a small noodle shop in northwest China and is famous for her incredible skill and speed in making noodles.</p>
        </Card.Text>
        <button className='Bcn rounded mb-2'>About More</button>
      </Card.Body>
    </Card>
 </Col>

          </Col>
      </Row>
    
    </Container>
        </Container>

        
    );
};

export default Extra;