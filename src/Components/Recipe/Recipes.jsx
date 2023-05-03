import React from 'react';
import { Table } from 'react-bootstrap';

const Recipes = ({Info}) => {
    console.log(Info)
    return (
        <div>
             <Table striped bordered hover variant="light">
      
      <tbody>
        <tr>
          {Info}
         
        </tr>
       
    
      </tbody>
    </Table>
        </div>
    );
};

export default Recipes;