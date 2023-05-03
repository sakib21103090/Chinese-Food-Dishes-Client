import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import React from 'react';
import app from '../../Shared/firebase/firebase.config';
import { ListGroup } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Navigate } from 'react-router-dom';

const PopUp = () => {

    const auth=getAuth(app);
    const provider = new GoogleAuthProvider();
    const handelGoogleLogin=()=>{
        signInWithPopup(auth,provider)
        .then(result=>{
          const user=result.user;
          Navigate('/');
          
        })
        .catch(error=>{
          console.log(error.message)
        })
      }



    return (
        <div>
             <ListGroup className='gap-1'>
                    <ListGroup.Item className='mb-2 text-dark bg-success text-center'>  <FaGoogle onClick={handelGoogleLogin}></FaGoogle> facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2 text-dark bg-success text-center'> <FaGithub></FaGithub> twitter </ListGroup.Item>
                </ListGroup>
        </div>
    );
};

export default PopUp;