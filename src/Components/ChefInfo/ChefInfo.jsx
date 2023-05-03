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
          <Container>
          <Row>
            {/* <Col md={4} lg={6} xs={12}> */}
            
          
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