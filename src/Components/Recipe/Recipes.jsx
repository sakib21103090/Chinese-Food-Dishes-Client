import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const Recipes = ({recipe}) => {

  const {name,image,details}=recipe;
    console.log(recipe)
    return (
      <Col  className='mt-4'   md={4}>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top"  height ={240} src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
        <h5>{details}</h5>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      </Card>
        </Col>
    );
};

export default Recipes;