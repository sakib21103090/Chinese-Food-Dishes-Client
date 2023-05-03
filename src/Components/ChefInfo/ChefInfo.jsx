import React from 'react';
import { useLoaderData, } from 'react-router-dom';
import Recipes from '../Recipe/Recipes';
import { Card, Container } from 'react-bootstrap';

const ChefInfo = () => {
  const  ChefInfo=useLoaderData();

  console.log(ChefInfo);
  const {recipesName}=ChefInfo;
  console.log(recipesName)
  return (
      
    <div>
          <Container className='d-style' >
            
          
          {
             recipesName.map(recipe=> <Recipes
             
             
            recipe={recipe}
             
             ></Recipes>
             )
          }
     </Container>
    </div>
    );
};

export default ChefInfo;