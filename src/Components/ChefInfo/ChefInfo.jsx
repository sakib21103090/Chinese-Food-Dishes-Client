import React from 'react';
import { useLoaderData, } from 'react-router-dom';
import Recipes from '../Recipe/Recipes';

const ChefInfo = () => {
  const  ChefInfo=useLoaderData();

  console.log(ChefInfo);
  const {id,name,picture,experience,recipes,recipesName}=ChefInfo;
  return (
      <div className='card'>


        <p>{name}</p>
         {
                recipesName.map(Info=><Recipes
                Info={Info}
                ></Recipes>
                
              
                )
             }
      </div>
    );
};

export default ChefInfo;