import React from 'react';
import { useLoaderData, } from 'react-router-dom';
import Recipes from '../Recipe/Recipes';
import { Card, Container } from 'react-bootstrap';

const ChefInfo = () => {
  const  ChefInfo=useLoaderData();

  console.log(ChefInfo);
  const {id,name,picture,experience,recipes,recipesName}=ChefInfo;
  return (
      
    <Container >
    <Card style={{ width: '30rem' }}>
<Card.Img className='img-fluid h-50'  variant="top" src={picture} />
<Card.Body className='bg-light'>
<Card.Title className='text-warning fw-bold '>{name}</Card.Title>
         {
                recipesName.map(Info=><Recipes
                Info={Info}
                ></Recipes>
                
              
                )
             }
     </Card.Body>
    </Card>
 </Container>
    );
};

export default ChefInfo;