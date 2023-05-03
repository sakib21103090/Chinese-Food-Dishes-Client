import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefInfo = () => {
    const  chefInfo=useLoaderData();

    const {id,name}=chefInfo;
    console.log(chefInfo);
    return (
        <div>
          <h5>{name}Name</h5>
        </div>
    );
};

export default ChefInfo;