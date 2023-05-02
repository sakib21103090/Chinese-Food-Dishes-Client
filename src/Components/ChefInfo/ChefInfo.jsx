import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefInfo = () => {
    const  ChefInfo=useLoaderData();

    const {id,name}=ChefInfo;
    console.log(ChefInfo);
    return (
        <div>
          <h5>{name} Name</h5>
        </div>
    );
};

export default ChefInfo;