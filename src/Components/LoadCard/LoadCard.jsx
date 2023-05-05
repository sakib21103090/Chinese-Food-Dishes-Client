import React, { useEffect, useState } from 'react';
import ChefData from '../ChefData/ChefData';
import { Container, Row } from 'react-bootstrap';

const LoadCard = () => {

  
    const [LoadCardData, setLoadCardData] = useState([]);

    useEffect(() => {
      fetch("https://chinese-food-dishes-server-sakib21103090.vercel.app/chefInfo")
        .then((response) => response.json())
        .then((data) => setLoadCardData(data));
    }, []);

    console.log(LoadCardData);
    return (
        <Container className='Bcc mt-4 rounded' >
            <Row>
          
             {
                LoadCardData.map(data=> <ChefData    
                key={data.id}
                data={data}
                ></ChefData>
                
                )
             }
             </Row>
           
        </Container>
    );
};

export default LoadCard;