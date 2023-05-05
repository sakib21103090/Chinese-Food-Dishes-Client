import React from 'react';
import { useLoaderData, } from 'react-router-dom';
import Recipes from '../Recipe/Recipes';
import { Card, Col, Container, Row } from 'react-bootstrap';

const ChefInfo = () => {
  const  ChefInfo=useLoaderData();

  console.log(ChefInfo);
  const {recipesName}=ChefInfo;
  console.log(recipesName)
  return (
      
    <div>
          <Container className='Bcc mt-4 rounded'>
          <Row>
          
            
          
          {
             recipesName.map(recipe=> <Recipes
             
             
            recipe={recipe}
             
             ></Recipes>
             )
          }
          {/* </Col> */}
          </Row>
     </Container>

    </div>
    
    );
};

export default ChefInfo;