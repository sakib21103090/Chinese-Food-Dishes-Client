import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import React from 'react';
import app from '../../Shared/firebase/firebase.config';
import { ListGroup } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const PopUp = () => {
     
    const navigate=useNavigate();
    const location=useLocation();
    const from =location.state?.from?.pathname || '/';

    const auth=getAuth(app);
    const provider = new GoogleAuthProvider();
    const GitProvider = new GithubAuthProvider();


    const handelGoogleLogin=()=>{
        signInWithPopup(auth,provider)
        .then(result=>{
          const user=result.user;
           navigate(from,{replace :true});
          
        })
        .catch(error=>{
          console.log(error.message)
        })
      }
    const handelGitHubLogin=()=>{
        signInWithPopup(auth,GitProvider)
        .then(result=>{
          const user=result.user;
           navigate(from,{replace :true});
          
        })
        .catch(error=>{
          console.log(error.message)
        })
      }



    return (
        <div>
             <ListGroup className='gap-1'>
                    <ListGroup.Item className='mb-2 TG Bc text-center' onClick={handelGoogleLogin}>  <FaGoogle ></FaGoogle> Google</ListGroup.Item>
                    <ListGroup.Item className='mb-2 text-dark Bc text-center'  onClick={handelGitHubLogin}> <FaGithub></FaGithub> GitHub </ListGroup.Item>
                </ListGroup>
        </div>
    );
};

export default PopUp;