import React from 'react';
import { Button, Card, Row } from 'react-bootstrap';

const Recipes = ({recipe}) => {

  const {name,image,details}=recipe;
    console.log(recipe)
    return (
      <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
        <h5>{details}</h5>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      </Card>
        </div>
    );
};

export default Recipes;