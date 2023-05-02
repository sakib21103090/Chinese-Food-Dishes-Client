import React, { useEffect, useState } from 'react';
import ChefData from '../ChefData/ChefData';
import './LoadCard.css'
import { Container } from 'react-bootstrap';

const LoadCard = () => {

  
    const [LoadCardData, setLoadCardData] = useState([]);

    useEffect(() => {
      fetch("http://localhost:5000/chefInfo")
        .then((response) => response.json())
        .then((data) => setLoadCardData(data));
    }, []);

    console.log(LoadCardData);
    return (
        <Container className='d-style' >
          
             {
           
              
                LoadCardData.map(data=><ChefData

                    
                key={data.id}
                data={data}
                ></ChefData>
               
                )
             }
        </Container>
    );
};

export default LoadCard;