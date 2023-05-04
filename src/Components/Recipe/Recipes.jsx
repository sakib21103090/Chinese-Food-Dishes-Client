import React from 'react';
import { Button, Card, Col, Row, Table } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipes = ({recipe}) => {
  const notify = () => toast("Add to favorite");

  const {name,image,rating,cookingMethod,ingredients}=recipe;
    console.log(recipe)
    return (
      <Col  className='mt-4'   md={4}>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top"  height ={240} src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          
          <Table striped bordered hover size="sm">
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
          <Table striped bordered hover size="sm">
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
      
        <h5>Rating :{rating}</h5>
        </Card.Text>
        <Button variant="primary" onClick={notify}>Favorite</Button>
        <ToastContainer />
      </Card.Body>
      </Card>
        </Col>
        
    );
};

export default Recipes;