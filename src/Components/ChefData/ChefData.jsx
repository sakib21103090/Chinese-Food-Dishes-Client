import React from 'react';
import { Button, Card, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ChefData = ({data}) => {
    const {id,name,picture,experience,recipes,likes}=data;
    return (

        
         <Col className='mt-4'   md={4}>
            <Card style={{ width: '18rem' }}>
           <Card.Img variant="top" height ={240} src={picture} />
          <Card.Body className='bg-light'>
           <Card.Title className='text-warning fw-bold '>{name}</Card.Title>
       
              <div>
              <p className='text-success'> experience : {experience}Year</p> 
               <p className='text-success'>recipes :{recipes}</p>
              <p className='text-success'>likes :{likes}</p>
              </div>
        
          
              <Link to={`/chefInfo/${id}`}><Button variant="primary">View Recipes</Button></Link>
      </Card.Body>
    </Card>
 </Col>

        
    );
};

export default ChefData;