import React, { useState } from 'react';
import { Button, Card, Col, Row, Table } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Recipes = ({recipe}) => {
  const notify = () => toast("Add to favorite");


  const {name,image,rating,cookingMethod,ingredients}=recipe;
    console.log(recipe)
    return (
      <Col  className='mt-4 Bcc'   md={4}>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top"  height ={240} src={image} />
      <Card.Body className='Bc'>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          
          <Table striped bordered hover size="sm" className='Pink'>
          <thead>
          <tr>
          <th>ingredients</th>
          </tr>
      </thead>
   <tbody>
        <tr>
          <td>{ingredients}</td>
         </tr>
      </tbody>
    </Table>
          <Table striped bordered hover size="sm" className='Pink'>
          <thead>
          <tr>
          <th>cookingMethod</th>
          </tr>
      </thead>
   <tbody>
        <tr>
          <td>{cookingMethod}</td>
         </tr>
      </tbody>
    </Table>
      
        <div className=' flex-grow-1 d-flex'>
        <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
        <span className='ms-2'>{rating}</span>
        </div>
        </Card.Text>
        <Button className='Bcn' onClick={notify}>Favorite</Button>
        <ToastContainer />
      </Card.Body>
      </Card>
        </Col>
        
    );
};

export default Recipes;