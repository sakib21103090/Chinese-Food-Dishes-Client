import React from 'react';
import { Button, Card, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ChefData = ({data}) => {
    const {id,name,picture,experience,recipes,likes}=data;
    return (

        
         <Col className='mt-4  mb-4 Bcc'   md={4}>
            <Card style={{ width: '18rem' }}>
           <Card.Img variant="top" height ={240} src={picture} />
          <Card.Body className='Bc'>
           <Card.Title className='text-warning fw-bold '>{name}</Card.Title>
       
              <div>
              <p className='Text3'> experience : {experience}Year</p> 
               <p className='Text3'>recipes :{recipes}</p>
              <p className='Text3'>likes :{likes}</p>
              </div>
        
          
              <Link to={`/chefInfo/${id}`}><Button className='Bcn'>View Recipes</Button></Link>
      </Card.Body>
    </Card>
 </Col>

        
    );
};

export default ChefData;